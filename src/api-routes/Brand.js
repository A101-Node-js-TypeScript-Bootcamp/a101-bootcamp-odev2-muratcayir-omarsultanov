const express = require("express");
const {listBrand,listAllBrands} = require("../controllers/Brand")
const router = express.Router()

router.get("/",listAllBrands)//If there is an authenticate operation, the listAllBrands function is executed.
router.get("/:id",listBrand)//If there is an authenticate operation, the listBrand function is executed.


module.exports=router;