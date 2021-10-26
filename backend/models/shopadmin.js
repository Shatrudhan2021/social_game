const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const shopadminSchema = new mongoose.Schema({
   
 shopname: {
     type:String,
     required: [true , "shopname is required"],
    

 },
 shop_username:{
     type:String,
     required: [true , "store_username is required"],
     lowercase: true,
     unique:[true , "Shopname is must be unique"]
 },
 password:{
     type: String,
     required: [true , "password is required"]
      
 },
 isactive:{
     type:Boolean,
     default:false
 },

} ,
 {
    timestamps:true
  }
)

shopadminSchema.pre('save' ,  async function(next){
   this.password =  await bcrypt.hash(this.password , 12 );
   next();

})

// Check PassWord

shopadminSchema.methods.correctPassword = async function (EnterPassword, userpassword) {
    const result = await bcrypt.compare(EnterPassword, userpassword);
    return result;
}

module.exports = mongoose.model('shopadmin' , shopadminSchema)