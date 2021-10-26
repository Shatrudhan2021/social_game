const express = require('express');
const PrizeController = require('../controllers/prizeControler');
const authController = require("../controllers/authController");

const routes = express.Router();

routes.route('/')
.post(authController.Protect  , authController.Restrict('isadmin')  ,PrizeController.CreatePrize)
.get(authController.Protect  , authController.Restrict('isadmin') , PrizeController.GetAllPrize);

routes.route("/:id")
.get(PrizeController.GetPrize)
.patch(authController.Protect  , authController.Restrict('isadmin') , PrizeController.UpdatePrize)
.delete(authController.Protect  , authController.Restrict('isadmin') , PrizeController.DeletePrize)

module.exports = routes;
