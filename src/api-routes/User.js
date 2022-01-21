const validate = require("../middlewares/validate"); //validate middleware
const schemas = require("../validations/User"); //validations
const { loginUser } = require("../controllers/User");
const express = require("express");
const router = express.Router();

router.route("/").post(validate(schemas.loginValidation),loginUser);//If there is an validate operation, the loginUser function is executed.

module.exports = router;
