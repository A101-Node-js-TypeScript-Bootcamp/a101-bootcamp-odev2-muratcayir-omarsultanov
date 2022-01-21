const Joi = require("joi");

const loginValidation =  Joi.object({
    password:Joi.string().required().min(8),
    email:Joi.string().email().required().min(8)
})  

module.exports= {loginValidation}