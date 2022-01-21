const JWT = require("jsonwebtoken")

const generateAccesToken = (user) =>{
    return JWT.sign({name:user.email,...user},process.env.ACCESS_TOKEN_SECRET_KEY,{expiresIn:"1W"})//Token created with user.email signature
}

const generaterRefreshToken = (user) =>{
    return JWT.sign({name:user.email  ,...user},process.env.REFRESH_TOKEN_SECRET_KEY)//If the token expires, it will be renewed with a refresh token.
}

module.exports={generateAccesToken,generaterRefreshToken}