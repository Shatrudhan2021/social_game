const mongoose = require("mongoose");

const prizeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is requiredd']
    },
    isawarded:{
        type: Boolean,
        deafult: false

    },
    rewardedtimestamp:{
        type:Date
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'user'

    },
    shop:{
        type:mongoose.Schema.ObjectId,
        ref:'shop',
        required: [true , 'Provide Valid ShopId']
       }
    },
{
    timestamps: true
}
)



module.exports = mongoose.model('prize' , prizeSchema)