const httpStatus = require("http-status");
const {getAllCategories,getCategory} = require("../services/Category")

const listAllCategories = (req,res)=>{
    getAllCategories()
        .then((response) => {
          res.status(httpStatus.OK).send(response);//if everything goes right
        })
        .catch((e) => {
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);//if there is an error
        });
}

const listCategory = (req,res)=>{
    getCategory(req.params.id)
    .then((response) => {
      res.status(httpStatus.OK).send(response);//if everything goes right
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);//if there is an error
    });
}

module.exports= {listCategory,listAllCategories}