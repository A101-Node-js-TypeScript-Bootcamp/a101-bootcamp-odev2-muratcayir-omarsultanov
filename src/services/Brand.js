const axios = require("axios")

const getAllBrands = async () =>{
    const {data} = await axios.get(`https://api.trendyol.com/sapigw/brands`)
    return data
}

const getBrand = async (brandId) =>{
    const {data} = await axios.get(`https://api.trendyol.com/sapigw/brands/by-name?name=${brandId}`)
    return data
}

module.exports= {getAllBrands,getBrand}