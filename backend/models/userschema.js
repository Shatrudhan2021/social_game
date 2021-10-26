const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    identifyid:{
        type:String,
    },
    first_name:{
        type:String,
        
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    zipcode:{
        type:String
    },
    shop:{
        type:mongoose.Schema.ObjectId,
        ref:'shop'
    },
    visitshop:{
        type:String
    },
   iswinner:{
       type: Boolean,
       default: false
   },
   movescount:{
    type: String,
    },
    playtime:{
        type: String,
        },
   animaldetail:{
       name:{
           type:String,
       },
       age:{
        type:String,
       },
       iscat:{
           type:Boolean,
           deafult: false
           
       },
       isdog:{
           type:Boolean,
           deafult: false
       },
       
       iskitten_ispuppy: {
           type:String
       },
       isweight:{
           type: String,
           enum:['ten' , 'ten_fifteen', 'twentyfive'],
       },
       acceptcookie:{
        type:Boolean,
        default: false
        }
   },
   role:{
       type:String,
       enum:['user' , 'isadmin'],
       default: 'user'
   },
   prize:{
       type:mongoose.Schema.ObjectId,
       ref: 'prize'
   },
   
    

   } , 

  {
    timestamps:true
  }

  )
  
userSchema.pre(/^find/ , function(next){
    this.populate({
        path:'shop',
        select:"-__v"
    }).populate({
        path: 'prize'
    })
    next();
})
module.exports = mongoose.model('user' , userSchema)