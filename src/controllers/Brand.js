const httpStatus = require("http-status");
const {getAllBrands,getBrand} = require("../services/Brand")

const listAllBrands = (req,res)=>{
    getAllBrands()
        .then((response) => {
          res.status(httpStatus.OK).send(response);//if everything goes right
        })
        .catch((e) => {
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);//if there is an error
        });
}

const listBrand = (req,res)=>{
    getBrand(req.params.id)
    .then((response) => {
      res.status(httpStatus.OK).send(response);//if everything goes right
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);//if there is an error
    });
}

module.exports= {listBrand,listAllBrands}