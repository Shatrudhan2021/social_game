const express = require("express");
const helmet = require("helmet")
const mongoSanitize=require('express-mongo-sanitize');
const layout = require("express-ejs-layouts")
const xss = require('xss-clean')
 


// initialize app
const app = express();

app.use(express.static('public'));
app.use('/css' , express.static(__dirname + "/public/css"));
app.use('/js' , express.static(__dirname + "/public/js"))
app.use('/img' , express.static(__dirname + "/public/img"))
app.use('/vendor' , express.static(__dirname + "/public/vendor"));

// app.use(layout)
app.set('views' , 'views')
app.set("view engine", "ejs");


app.use(helmet())

// Prevent to No Sql Data Injection
app.use(mongoSanitize());

// Prevent to malicious  htmldata
app.use(xss())


// require routes

require("./startup/dotenv")();
require("./db/db")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./utils/unhandleRoutes")(app);
require("./utils/globalErrorhandler")(app);




//  initialize PORT
const port = process.env.PORTF;

//  create Server
app.listen(port, ()=>{
    console.log(`Port Start On ${port}`)
})