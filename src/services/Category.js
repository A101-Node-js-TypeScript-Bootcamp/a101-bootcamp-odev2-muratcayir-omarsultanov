const axios = require("axios")

const getAllCategories = async () =>{
    const {data} = await axios.get(`https://api.trendyol.com/sapigw/product-categories`)
    return data
}

const getCategory = async (categoryId) =>{
    const {data} = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`)
    return data
}

module.exports= {getAllCategories,getCategory}