const mongoose=require("mongoose")

const productsSchema=mongoose.Schema({
    title:String,
    quantity:Number,
    brand:String,
    category:String,
    rating:Number,
    offerprice:Number,
    mrp:Number,
    image:String
},{
    versionKey:false
}
)

const ProductModel = mongoose.model("product",productsSchema)

module.exports={ProductModel}