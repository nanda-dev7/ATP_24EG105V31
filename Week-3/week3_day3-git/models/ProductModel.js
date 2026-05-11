import { Schema, model } from "mongoose"

// Create product Schema

const ProductSchema = new Schema(
{
    productId:{
        type:Number,
        required:[true,"Product Id is required"]
    },
    productName:{
        type:String,
        required:[true,'Product Name is required']
    },
    price:{
        type:Number,
        min:[10000,'Minimum 10000 is required'], 
        max:[50000,"Limit is 50000 only-/"]
    },
    brand:{
        type:String,
        required:[true,"Brand is compulsory"]
    }
},
{
    versionKey:false, // It disable the _v version key which internally mongoose creates internally
    timestamps:true            //  Automatic creation of createdAt and updatedAt fields in your documents.
}
)
// generate productmodel 
export const ProductModel = model("product", ProductSchema)  