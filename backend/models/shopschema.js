const mongoose = require("mongoose");

const shopschema = new mongoose.Schema({
    shopname:[
         {
           type : mongoose.Schema.ObjectId,
           ref:"shopname"
        },
        
   ],
   startingdate:{
       type: Date
   },
   prizecamday: {
       type: Number,
            
   }, 
   campday:{
       type: Number,
      

   },
   prizeawarddate:{
       type: Date

   },

   active:{
    type:Boolean,
    default: false

},
   prize:[
       {
       type:mongoose.Schema.ObjectId,
       ref: 'prize'
   }
]
   
},
 
 
{
    timestamps: true
}
);

// shopschema.virtual("prize", {
//     ref:"prize",
//     foreignField:"shop",
//     localField:"_id",
    

// })

 
shopschema.pre(/^find/ , function(next){
    
    this.populate({
        path:"prize",
        select:"-__v"
    }).populate({
        path:'shopname',
    }) 
    next();
})

module.exports = mongoose.model('shop' , shopschema)