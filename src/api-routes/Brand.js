const express = require("express");
const authenticate = require("../middlewares/authenticate")
const {listBrand,listAllBrands} = require("../controllers/Brand")
const router = express.Router()

router.get("/",authenticate,listAllBrands)//If there is an authenticate operation, the listAllBrands function is executed.
router.get("/:id",authenticate,listBrand)//If there is an authenticate operation, the listBrand function is executed.


module.exports=router;