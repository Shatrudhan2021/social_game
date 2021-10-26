const Language = require("../models/language");

exports.Createlanguage = async(req , res , next)=>{
try{
   
    const lang = await Language.create(req.body);
   
    res.status(200).json({
        status:"success",
        data: lang
    })

    }catch(err){
       res.status(404).json({
           status:"err",
           message: 'something wong happend'
       })
    }

}

exports.Getlanguage = async(req , res , next)=>{
    try{
       
        const lang = await Language.findById(req.params.id);
       
        res.status(200).json({
            status:"success",
            data: lang
        })
    
        }catch(err){
           res.status(404).json({
               status:"err",
               message: 'something wong happend'
           })
        }
    
    }

    exports.GetAlllanguage = async(req , res , next)=>{
        try{
           
            const lang = await Language.find();
           
            res.status(200).json({
                status:"success",
                data:lang
            })
        
            }catch(err){
               res.status(404).json({
                   status:"err",
                   message: 'something wong happend'
               })
            }
        
        }

        exports.Updatelanguage = async(req , res , next)=>{
            try{
               
                const lang = await Language.findByIdAndUpdate(req.params.id , req.body , {
                    new:true
                });
               
                res.status(200).json({
                    status:"success",
                    data: lang
                })
            
                }catch(err){
                   res.status(404).json({
                       status:"err",
                       message: 'something wong happend'
                   })
                }
            
            }

            