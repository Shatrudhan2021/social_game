const Shop = require("../models/shopschema");
const logger = require("../utils/logger");
const AppError = require("../utils/appError");
const ApiFeature = require("../utils/apifeature");
const language = require("../models/language");


exports.CreateShop = async(req, res , next)=>{
    try{
        const {name } = req.body;
          if(!name){
              return next(new AppError("languageId and name is required" , 404))
          }

        const shop = await Shop.create({
            name
        })

        res.status(201).json({
            status:"success",
            data: shop
        })

    }catch(err){
        console.log("Err is " , err)
        logger.log("error", `shopController.js | createshop | ${err}`);
        res.status(400).json({
            status:"error",
            message: 'something wong happend'
        })
    }

}

exports.GetAllshop = async (req, res , next)=>{
    try{
         

        const features = new ApiFeature(Shop.find()  , req.body).filter();
        const shop = await features.query;
        res.status(200).json({
            status:"success",
            data:shop
           })

    }catch(err){
        logger.log("error", `shopController.js | getallshop | ${err}`);
        res.status(400).json({
            status:"error",
            message: 'something wrong happend'
        })

    }
}

exports.GetAllshopBylanguage = async (req, res , next)=>{
    try{
         
        const languageid = req.lang;
        if(!languageid){
            return next(new AppError("Please Provide valid Language Id" , 400))
        }
       
        let shop = await Shop.find({status:true});
        let result = [];
        await shop.forEach( (singleShop)=>{
            singleShop = JSON.stringify(singleShop);
            singleShop = JSON.parse(singleShop);

            singleShop = { name: "", ...singleShop };
            
            if(singleShop.shopname.length){
                let i = 0;
                singleShop.shopname.forEach( (singleShopName)=> {
                    if(singleShopName.language != languageid){
                        singleShop.shopname.splice(i,i);
                    }else{
                        singleShop.name = singleShopName.name;
                    }
                    i++;
                });
            }
            delete singleShop.shopname;
            result.push(singleShop);
        })

         res.status(200).json({
            status:"success",
            data:result
           })

    }catch(err){
        console.log("err o" , err)
        logger.log("error", `shopController.js | getallshop | ${err}`);
        res.status(400).json({
            status:"error",
            message: 'something wrong happend'
        })

    }
}
exports.DeletesShop =async  (req , res , next)=>{
    try{

        const shop = await Shop.findByIdAndRemove(req.params.id);
        if(!shop){
            return res.status(404).json({
                status:"fail",
                message:"Shop Not Found"
            })
        }
      
        res.status(204).json({
            status:"success",
            message:"shop Delted"
        })
    }catch(err){

        logger.log("error", `shopController.js | delete shop | ${err}`);
        res.status(400).json({
            status:"error",
            message: 'something wong happend'
        })
    }
}

exports.UpdateShop = async(req , res , next)=>{
    try{
        const shop = await Shop.findByIdAndUpdate(req.params.id , req.body ,{
            new: true , 
            runValidators: true
        } );
        if(!shop){
            return next(new AppError("Shop Can't Exits" , 404));
        
        }
        res.status(200).json({
            status: "success",
            data: shop
        })

    }catch(err){
        res.status(404).json({
            status:"error",
            message: 'something wong happend'
        })

    }
   


}

exports.GetShop = async(req , res)=>{
    try{
        const shop = await Shop.findById(req.params.id)
       
        res.status(200).json({
            status:"success" ,
            data: shop
        })

    }catch(err){
        res.status(404).json({
            status: 'error',
            message: 'something wong happend'
        })
        
    }
}
