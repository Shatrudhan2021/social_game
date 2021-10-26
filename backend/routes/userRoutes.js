const express = require("express");
const userController = require("../controllers/userController")
const authController  = require("../controllers/authController")


const router = express.Router();
// authController.Protect  , authController.Restrict('isadmin')  ,
router.route('/authadmin').post(authController.AuthAdmin)
router.route('/rewards').post(userController.awardPrize)



router.route("/").post(userController.CreateUser)
.get(authController.Protect , authController.Restrict('isadmin'),  userController.GetAlluser);

router.route("/:id")
.post(authController.Protect , userController.UpdateUser )
.get(userController.GetUser)
.delete(authController.Protect , authController.Restrict('isadmin'), userController.DeletUser)



// authController.Protect  , authController.Restrict('isadmin')('isadmin') ,
module.exports = router