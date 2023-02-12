const express=require("express")
const { products } = require("./data/Products.js")
const { users } = require("./data/users.js")
const { Product } = require("./model/ProductModel.js")
const { User } = require("./model/UserModel")
const asyncHandler=require("express-async-handler")


const Importdata=express.Router()



Importdata.post("/products",asyncHandler(async(req,res)=>{
    await Product.deleteMany({})
    const importProducts=await Product.insertMany(products)
    res.send({importProducts})
})
)

module.exports={Importdata}