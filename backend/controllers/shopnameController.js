const Shopname = require("../models/shopnameschema");


exports.CreateShopname = async(req , res , next)=>{
try{
   
    const shopname = await Shopname.create(req.body);
   
    res.status(200).json({
        status:"success",
        data: shopname
    })

    }catch(err){
       res.status(404).json({
           status:"err",
           message: 'something wong happend'
       })
    }

}

exports.GetShopName = async(req , res , next)=>{
    try{
       
        const shopname = await Shopname.findById(req.params.id).populate("shopname");
       
        res.status(200).json({
            status:"success",
            data: shopname
        })
    
        }catch(err){
           res.status(404).json({
               status:"err",
               message: 'something wong happend'
           })
        }
    
    }

    exports.GetAllShopname = async(req , res , next)=>{
        try{
           
            const shopname = await Shopname.find();
           
            res.status(200).json({
                status:"success",
                data: shopname
            })
        
            }catch(err){
               res.status(404).json({
                   status:"err",
                   message: 'something wong happend'
               })
            }
        
        }

        exports.UpdateShopname = async(req , res , next)=>{
            try{
               
                const shopname = await Shopname.findByIdAndUpdate(req.params.id , req.body , {
                    new:true
                });
               
                res.status(200).json({
                    status:"success",
                    data: shopname
                })
            
                }catch(err){
                   res.status(404).json({
                       status:"err",
                       message: 'something wong happend'
                   })
                }
            
            }

            