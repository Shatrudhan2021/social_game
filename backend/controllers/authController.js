const AppError = require("../utils/appError");
const { verifyToken, Createtoken } = require("../utils/token");
const User = require("../models/userschema");
const logger = require("../utils/logger");
const { Validator } = require('node-input-validator');
const shopadminuser = require("../models/shopadmin")

exports.Protect = async (req, res, next) => {
  try {
    let token = "";

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      token = req.header("x-auth-token");
    }

    if (!token) {
      return next(new AppError("Permission Denied", 401));
    }
    const decoded = await verifyToken(token);

    if (!decoded) {
      return next(new AppError("Permission Denied", 401));
    }
    const currentuser = await User.findById(decoded.id);
    //    console.log("saaaaveee" , currentuser)

    if (!currentuser) {
      return next(new AppError("Permission Denied", 401));
    }
    req.user = currentuser;

    next();
  } catch (err) {
    logger.log("error", `auth.js |  protect | ${err}`);

    res.status(404).json({
      status: "error",
      message: "something wong happend",
    });
  }
};

exports.Restrict = (...roles) => {
  return (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        return next(new AppError("Permission Denied ", 401));
      }
      next();
    } catch (err) {
      logger.log("error", `authcontroller.js | restrict | ${err}`);
      return res.status(404).json({
        status: "error",
        message: "something wong happend",
      });
    }
  };
};

exports.AuthAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const exittemail = process.env.ADMIN_EMAIL;
    const exitpassword = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      console.log("insidee theee");
      return next(new AppError("Provide Valid User Id && Password", 401));
    }

    if (email === `${exittemail}` && password === `${exitpassword}`) {
        
      const token = await Createtoken(password);

      res.send({
        token: token,
        status: "success",
        redirect_path: "/dashboard",
      });
    } else {
      console.log("insend elseee is");

      const error = "WRONG USER ID AND PASSWORD";

      return res.send({ data: error, status: "fail", redirect_path: "/" });
    }
  } catch (err) {
    logger.log("error", `auth.js | login user | ${err}`);

    return res.status(400).json({
      status: "error",
      message: "something wrong happend",
    });
  }
};

exports.shopadminlogin = async (req , res  , next)=>{
  try{
     const validatefield = new Validator(req.body, {
            name: 'required|string',
            password: 'required|string'
          });
        
          const valid = await validatefield.check();
        
          if(!valid){
            
              return res.status(404).json({
                  status:"fail",
                  message: "Please Provide Valid details"
              })
          }

        const shopadmindetails = req.body;

       const exitUser = await shopadminuser.findOne({shop_username: shopadmindetails.name.toLowerCase() })
       if(!exitUser){
         return next(new AppError("User Not Exits" , 401))
       }
      
     const matchpassword =  await  exitUser.correctPassword(shopadmindetails.password , exitUser.password)
  
     if(!matchpassword){
       return next(new AppError("Please Provide valid UserName and password" , 401))
     }

     return res.status(200).json({
       status:"success",
       shoploginId: exitUser._id,


     })

  }catch(err){
    logger.log("error", `auth.js | shopadminlogin | ${err}`);
    return res.status(400).json({
      status: "error",
     error: 'something wong happend',
  });

  }
}