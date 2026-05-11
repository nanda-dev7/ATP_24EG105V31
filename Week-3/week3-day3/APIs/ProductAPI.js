/* Create Product REST API with below features
Product document structure
     a.productId (required)
     b.productName(required)
     c.price(required, min price 10000 and max price 50000)
     d.brand(required)
REST API with below operations
     a. Create product
     b. Read all products
     c. Read a product by productId
     d. Update a product by productId
     e. Delete a product by productId */

import exp from 'express'
export const productApp = exp.Router()
// This model represents the "Product" collection in your MongoDB database
import { ProductModel } from '../models/ProductModel.js'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
const {sign}=jwt



productApp.post("/product",verifyToken, async (req,res)=>{ 
// get a new product obj from req  `req.body` contains data sent by the client, usually in JSON format
    const newproduct = req.body
    // Create a new instance of the ProductModel using the data from the request
    // This prepares a new document to be saved in the MongoDB database
    const newproductDocument = new ProductModel(newproduct)

    // Save the new product document to the database
    // This is an asynchronous operation, so we use `await` to wait for it to complete
    const result=await newproductDocument.save();
    console.log("result:",result)

    res.status(201).json({message:"ProductCreated"})
});


// Read all users 
productApp.get("/product",verifyToken,async(req,res)=>{
     // read all users from db
     let productList=await ProductModel.find()
     // send res
     res.status(200).json({message:"product",payload:productList})
})


// Read a product by productid
productApp.get("/product/:id",verifyToken, async(req,res)=>{
   //  Express treats all route parameters as strings now it takes as number 
    const uid=Number(req.params.id);
        // find product  by id
        const ProductObj = await ProductModel.findOne({productId:uid});
        // if user not found 
        if(!ProductObj){
           return res.status(404).json({message:"Product is not found"})
        }
        // send response
        res.status(200).json({
            message: "product",
            payload: ProductObj
        })
})

// Update a user byid
productApp.put("/product/:id",verifyToken,async (req, res) => {
    // get modified user from req
    const modifiedProduct = req.body;
    const uid = Number(req.params.id);  
// find user by id and update
    const updateProduct = await ProductModel.findOneAndUpdate(
        { productId: uid },   // filter
        { $set: { ...modifiedProduct } },
        { new: true, runValidators: true }
    );
// send response 
    res.status(200).json({
        message: "product modified",
        payload: updateProduct
    });
});




// delete by user id 
productApp.delete("/product/:id",verifyToken,async(req,res)=>{
    // read object id from req params
    const uid =Number(req.params.id);
    // find user by id
    const deletedproduct = await ProductModel.findOneAndDelete(uid)
    if(!deletedproduct){
        return res.status(404).json({message:"Product is not found "})
    }
    // delete user 
    res.status(200).json({message:"product deleted",payload:deletedproduct})
})
