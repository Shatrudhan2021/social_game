const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , 'Name is Required']
    },
   
})

module.exports = mongoose.model('language' , languageSchema)