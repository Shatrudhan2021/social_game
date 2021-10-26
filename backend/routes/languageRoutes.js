const express = require('express');
const languageController = require("../controllers/languageController");

const routes = express.Router();

routes.route('/').post(languageController.Createlanguage).get(languageController.GetAlllanguage);
routes.route("/:id").put(languageController.Getlanguage);

module.exports = routes;
