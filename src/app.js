const express = require("express")//Fast, unopinionated, minimalist web framework for node.
const helmet = require("helmet")//Helmet helps you secure your Express apps by setting various HTTP headers.
const cors = require("cors")//CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const config = require("./config")
const {categoryRoutes,brandRoutes} =require("./api-routes")

config()

const app = express()

app.use(cors());//Enable All CORS Requests
app.use(express.json())//This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({extended:true}))//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(helmet())//Runs the helmet

app.use("/categories",categoryRoutes)
app.use("/brands",brandRoutes)


app.listen(process.env.APP_PORT,()=>{
    console.log(`Sunucu ${process.env.APP_PORT} portunda çalışıyor`)
})