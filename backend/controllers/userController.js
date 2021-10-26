const User = require("../models/userschema");
const AppError = require("../utils/appError");
const {Createtoken} = require('../utils/token');
const Shop = require("../models/shopschema")
const logger = require("../utils/logger")
const Prize = require("../models/prizeschema");
const ObjectId = require('mongoose').Types.ObjectId;
const moment = require('moment');
const Shopadmin = require("../models/shopadmin");
const { Validator } = require('node-input-validator');

 
exports.CreateUser = async (req, res , next)=>{
    try{
       const {shoploginId} = req.body;
       const identifyid = req.body.identifyid
      
       //  Validation
     const validatefield = new Validator(req.body,
        { 
            identifyid:'required|string'
        }
      );
      const valid = await validatefield.check();
      if(!valid){

        return res.status(404).json({
            status:"fail",
            message: "Please Provide Valid details"
        })
    }
    //  this is for the shopadmin user
    if(shoploginId){
        
        const exitsshopid = await Shopadmin.findById(shoploginId);
       
        if(!exitsshopid){
            return res.status(401).json({
                status:"fail",
                message:"UnAuthroized  shopadmin"
            })
        }
       
         const user  = await new User({identifyid : identifyid});
                
         await  user.save();

         const token = await Createtoken(user);
         
         return  res.status(201).json({
                status:true,
                token
                
            })
      }
    
    //   End Of  the shopadmin user
     
       const exitsUser = await User.findOne({ identifyid : identifyid});
        
        if(exitsUser){
            
             return next(new AppError("Not Applicable to play the Game" , 400))
        }
       const user = await User.create(req.body)

       const token = await Createtoken(user);

        res.status(201).json({
            status:"success",
            token
            
        })
        

    }catch(err){
      
        logger.log("error", `auth.js | create user | ${err}`);

         return res.status(400).json({
             status: "error",
            error: 'something wong happend',
         });
    }
}

exports.UpdateUser = async (req, res , next)=>{
    try{
    const user = await User.findByIdAndUpdate(req.params.id , req.body ,{
        new:true,
        runValidators: true
        
    })
    
    if(!user){
        res.status(400).json({
            status:'fail',
            message:"user can't exits"
        })
    }
    res.status(200).json({
        status:"succcess",
        data: user
    })

    }catch(err){
        
        logger.log("error", `usercontroller.js | updateuser | ${err}`);

        return res.status(400).json({
            status: "error",
            message: 'something wong happend'
        });

    }

}
exports.DeletUser = (req, res , next)=>{
    try{
    const user = User.findByIdAndRemove(req.params.id)
    if(!user){
        res.status(400).json({
            status:'fail',
            message:"user can't exits"
        })
    }
    res.status(200).json({
        status:"succcess",
        message:"user deleted"
    })

    }catch(err){
        logger.log("error", `usercontroller.js | updateuser | ${err}`);

        return res.status(400).json({
            status: "error",
            message: 'something wong happend'
        });

    }

}

exports.GetAlluser = async(req , res , next) =>{
    try{
        
        const user = await User.find() 

        
        res.status(200).json({
            status:"success",
            data: user
        })
       
    }catch(err){
         

        logger.log("error", `usercontroller.js | getalluser | ${err}`);

        return res.status(400).json({
            status: "error",
            message: 'something wong happend'
        });

    }
}

exports.GetUser = async(req , res , next)=>{
    try{
       
        const userId = req.params.id;
        const valid = ObjectId.isValid(userId);
        if(!valid){
            return  next(new AppError("Invid User Id" , 401))
        }
        const user = await User.findById(req.params.id);
        
          if(!user){
              return next(new AppError("User Can't Exits" , 400))
          }
          res.status(200).json({
              status:"success" , 
              data: user
          })

    }catch(err){
        logger.log("error", `usercontroller.js | getUser | ${err}`);

        return res.status(400).json({
            status: "error",
            message: 'something wong happend'
        });

    }

}


exports.awardPrize = async(req , res , next)=>{
    try{
        
        const {shopid , userid } = req.body;
        
        if(!shopid  || !userid){
            return res.status(400).json({
                status:"fail",
                message: "Please Provide Valid Details"
            })
        }

        const currentuser = await User.findById(userid);
       
        if(!currentuser){
            return next(new AppError("Provided user can't exits" , 404))
        }
         if(!currentuser.iswinner){
           
            return  res.status(200).json({
                status:"success",
                message:"Better Luck Next Time"
            })
            
        }

       
        const shopdetails = await Shop.findById(shopid);
        
         if(!shopdetails){
             return next(new AppError("Permission Denied Play Game First", 400))
         }

         
         const prizes = shopdetails.prize.filter(item => item.isawarded !== true );
                 
          if(prizes.length <= 0){
             return res.status(200).json({
                 status:"success",
                 message: "Unlucky Price Already Distrubted"
             })
         }

        

        Date.prototype.addHours= function(h){
            this.setHours(this.getHours()+h);
            return this;
        }
        

        const countdays = parseInt(shopdetails.prizecamday);

        const startingday =  shopdetails.startingdate;
        
        let date1 = moment(new Date(startingday).addHours(countdays * 24)) ;  
        let date2 = moment(startingday);
        let diff = date1.diff(date2,'days');
        

        const awardprize = parseInt(prizes.length / diff);


        
        const todaywinprize = shopdetails.prize.filter(item => {

          
            if(item.rewardedtimestamp) {
                
                return moment(item.rewardedtimestamp).format('L')  === moment(new Date()).format('L');
            }
        })
          const remain = awardprize - todaywinprize.length;

         
        if(remain < 1){
            return res.status(400).json({
                status:'fail',
                message: 'Prize Distributed'
            })
        }

          
          const  getprize = prizes[0];
          
          const updateduser = await User.findByIdAndUpdate(userid , {prize:getprize._id } , {
              new : true, 
              runValidators: false
          })
          

          await Prize.findByIdAndUpdate(getprize._id,{
              rewardedtimestamp: moment(new Date()).format('L'),
              user: updateduser._id,
              isawarded: true,
          }, {
              new : true
          })

         
          return res.status(200).json({
            status:"success",
            data: getprize._id
        })
      


    }catch(err){
     
        logger.log("error", `usercontroller.js | rewards | ${err}`)
        return res.status(400).json({
            status: "error",
            message: 'some error occour'
        });
    }
}