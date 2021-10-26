const express = require('express');
const shopController = require("../controllers/shopController");
const authController = require("../controllers/authController")

const routes = express.Router();

routes.route("/allshop").post(shopController.GetAllshop)
routes.route('/shopbylanguage').get(shopController.GetAllshopBylanguage)

if(process.env.NODE_ENV === "development"){
    routes.route('/').get(shopController.GetAllshop)

}


routes.route('/')
.post(authController.Protect  , authController.Restrict('isadmin') , shopController.CreateShop)
.get(authController.Protect  , authController.Restrict('isadmin') , shopController.GetAllshop)

if(process.env.NODE_ENV === "development"){
    routes.route('/:id').patch(shopController.UpdateShop).delete(shopController.DeletesShop);

}
routes.route('/:id')
.get(shopController.GetShop)
.patch(authController.Protect , authController.Restrict('isadmin'), shopController.UpdateShop)
.delete(authController.Protect , authController.Restrict('isadmin'), shopController.DeletesShop);

module.exports = routes;


