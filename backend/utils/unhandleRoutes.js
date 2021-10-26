const AppError = require("./appError");

module.exports =(app)=>{
    app.all('*' , (req,res , next)=>{
        next(new AppError(`Can't find On the ${req.originalUrl} on the server`, 404))
      
    })

}

// // 404 Error
// exports.get404ErrorPage = async (req, res, next) => {
//     try {
//       const isProd = process.env.NODE_ENV === "production";
//       res.status(200).render("", {
//         title: "404 not found!",
//         isProd,
              
//       });
//     } catch (err) {
//       console.log(err);
//       next(err);
//     }
//   };
  
//   // 500 Error
//   exports.get500ErrorPage = async (err, req, res, next) => {
//     try {
//       const isProd = process.env.NODE_ENV === "production";
//       console.log(err);
//       logger.info(`${new Date()} : ${err}`);
//       res.status(200).render("site/500", {
//         title: "Something went wrong!",
//         isProd,
//         path: "500",
        
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

