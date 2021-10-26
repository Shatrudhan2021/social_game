const Shopadmin = require("../models/shopadmin");
const { Validator } = require('node-input-validator');
const logger = require("../utils/logger");




exports.createShopAdmin = async (req , res , next)=>{
    try{ 
        const validatefield = new Validator(req.body,
            { 
            shopname: 'required|string' ,
            shop_username: 'required|string',
            password: 'required|string'
            }
          );
          const valid = await validatefield.check();
        
          if(!valid){
            
              return res.status(404).json({
                  status:"fail",
                  message: "Please Provide Valid details"
              })
          }
       
         const admindeatils = req.body;
         const exitsUser = await Shopadmin.findOne({shop_username: admindeatils.shop_username.toLowerCase()})

         if(exitsUser){
            return res.status(404).json({
                status:"fail",
                message: "User Name Already exits"
            }) 
        }
        const shopadmin = await Shopadmin.create(admindeatils);
        
        res.status(200).json({
            status:"success",
            data: shopadmin
        })

    }catch(err){
        logger.log("error", `shopadmincontroller.js | createshopadmin | ${err}`);
        res.status(404).json({
            status:"fail",
            message: "Something wrong Happen"
        })

    }
}


exports.GetShopAdmin = async (req , res, next)=>{
    try{
        const shopadmin = await Shopadmin.findById(req.params.id);
        res.status(200).json({
            status:"success",
            data: shopadmin
        })

    }catch(err){
        logger.log("error", `shopadmincontroller.js | getshopadmin | ${err}`);
        res.status(404).json({
            status:"fail",
            message: "Something wrong Happen"
        })

    }

}


exports.GetAllShopadmin = async (req , res, next)=>{
    try{
        
        const shopadmin = await Shopadmin.find({isactive:true});
        res.status(200).json({
            status:"success",
            data: shopadmin
        })

    }catch(err){
        logger.log("error", `shopadmincontroller.js | getallshopadmin | ${err}`);
        res.status(404).json({
            status:"fail",
            message: "Something wrong Happen"
        })

    }

}

exports.UpdateShopadmin = async (req , res, next)=>{
    try{
        const validatefield = new Validator(req.params,
            { 
                id:'required|string'
            }
          );
          const valid = await validatefield.check();
        
          if(!valid){
            
              return res.status(404).json({
                  status:"fail",
                  message: "Please Provide Valid ID"
              })
          }
       
          const shopadmin = await Shopadmin.findByIdAndUpdate(req.params.id  , req.body , {
            new: true , 
            runValidator: false
        });
        res.status(200).json({
            status:"success",
            data: shopadmin
        })

    }catch(err){
        logger.log("error", `shopadmincontroller.js | updateshopadmin | ${err}`);
        res.status(404).json({
            status:"fail",
            message: "Something wrong Happen"
        })

    }

}


exports.DeleteShopadmin = async (req , res, next)=>{
    try{
        const validatefield = new Validator(req.params,
            { 
                id:'required|string'
            }
          );
          const valid = await validatefield.check();
        
          if(!valid){
            
              return res.status(404).json({
                  status:"fail",
                  message: "Please Provide Valid details"
              })
          }

         const adminid = req.params.id
        
        
        const shopadmin = await Shopadmin.findByIdAndUpdate(adminid , {
            isactive: false
        },
       { 
        new: true,
        runValidator: false
    }


        );
          
        if(!shopadmin){
            return next(new AppError("Sorry User Can't exits" , 404))

        }

        res.status(200).json({
            status:"success",
            message: "user removed Succeful"
        })

    }catch(err){
        logger.log("error", `shopadmincontroller.js | deleteshopadmin | ${err}`);
        res.status(404).json({
            status:"fail",
            message: "Something wrong Happen"
        })

    }

}
