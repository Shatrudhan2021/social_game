const mongoose = require('mongoose');

const shopnameSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , 'Name is Required']
    },
    language:{
        type:mongoose.Schema.ObjectId,
        ref: 'language'

    }
   
})

module.exports = mongoose.model('shopname' , shopnameSchema)