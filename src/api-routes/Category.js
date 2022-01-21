const express = require("express");
const {listCategory,listAllCategories} = require("../controllers/Category")
const router = express.Router()

router.route("/").get(listAllCategories)//If there is an authenticate operation, the listAllCategories function is executed.
router.route("/:id").get(listCategory)//If there is an authenticate operation, the listCategory function is executed.



module.exports=router;