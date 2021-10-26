const express = require('express');
const ShopnameController = require("../controllers/shopnameController");

const routes = express.Router();

routes.route('/').post(ShopnameController.CreateShopname).get(ShopnameController.GetAllShopname);
routes.route("/:id").put(ShopnameController.GetShopName);

module.exports = routes;
