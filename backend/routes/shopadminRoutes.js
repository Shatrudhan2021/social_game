const express = require("express");
const ShopadminController = require("../controllers/shopadminController");
const authController = require("../controllers/authController");


const routes = express.Router();

routes.route('/login').post(authController.shopadminlogin);

//routes.route('/updatepassword').post(authController.Protect ,  authController.Restrict('isadmin')  , authController.Updateshopadminpassword)

routes.route('/')
.get(authController.Protect ,  authController.Restrict('isadmin') , ShopadminController.GetAllShopadmin)
.post(authController.Protect ,  authController.Restrict('isadmin') , ShopadminController.createShopAdmin);


routes.route('/:id')
.get(ShopadminController.GetShopAdmin)
.post(ShopadminController.UpdateShopadmin)
.delete(authController.Protect ,  authController.Restrict('isadmin')  , ShopadminController.DeleteShopadmin)


module.exports = routes;