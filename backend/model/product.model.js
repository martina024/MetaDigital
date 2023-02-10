const mongoose=require("mongoose")

const reviewSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
 
    } ,
    comments:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
})
const productSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
        
    },
    rating:{
        type:Number,
        required:true,
        defalut:0
       
    } ,
    description:{
        type:String,
        required:true,
    },
    reviews:[reviewSchema],
    numReviews:{
        type:Number,
        required:true,
        defalut:0
    },
    mrp:{
        type:Number,
        required:true,
        defalut:0
    },
    countInStock:{
        type:Number,
        required:true,
        defalut:0
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    offerprice:{
        type:Number,
        
    }
},
{
    versionKey:false
}
)

const Product=mongoose.model("Product",productSchema)

module.exports={Product}