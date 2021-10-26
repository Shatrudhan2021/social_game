const express = require("express");
const user = require("../routes/userRoutes");
const Prize = require("../routes/prizeRoutes");
const Shop = require("../routes/shopRoutes");
const view = require("../routes/viewRoute");
// const unhadlePages = require("../utils/unhandleRoutes")
const language = require("../routes/languageRoutes");
const shopname = require("../routes/shopnameRoutes");
const Language = require("../models/language");
const shopadmin = require("../routes/shopadminRoutes");

const getLangSynbolId = async (symbol) => {
    const lang = await Language.findOne({name:symbol});
    if(lang){
        return lang._id;
        }
        return process.env.langid; 
    }


 const midle = async(req, res, next) => {
    langSymbol = req.headers.lang;
    req.lang = await getLangSynbolId(langSymbol);
    next();
};

 

module.exports =(app)=>{
    
    app.use(express.json({limit: '10kb'})) 
    app.use(express.urlencoded({extended: true}))
    app.use("/" ,  view)
    app.use("/api/user" ,midle, user)
    app.use("/api/prize" ,midle, Prize)
    app.use("/api/shop" ,midle, Shop)
    app.use('/api/language' , midle,  language)
    app.use('/api/shopname' , midle, shopname)
    app.use('/api/storeadmin', shopadmin );
   
}