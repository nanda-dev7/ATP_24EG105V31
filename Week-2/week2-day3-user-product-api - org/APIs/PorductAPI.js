
//Create a mini-express application(Seperate Route)
import exp from 'express'
export const productApp=exp.Router()

//Product API
let products=[]
     //read all products
     productApp.get('/products',(req,res)=>{
        //response
        res.json({message:"all products",payload:products})
     })
     
     //create a new Product ({productId,name,brand,price})
     productApp.post('/products',(req,res)=>{
        //extract data from client
        let newProduct=req.body
        //push it into the array
        products.push(newProduct)
        //response
        res.json({message:"Product added"})
     })


     //read all product by brand
     let count=0
     productApp.get('/products/:brand',(req,res)=>{
        //getting the product brand from url
        let brandUrl=req.params.brand
        //finding the brands and pushing in brandProducts
        for(let item of products){
            if(item.brand===brandUrl){
                res.json({message:"brand product",payload:item})
                count++
            }
        }
        //if no brands are available
        if(count===0){
            res.json({message:"No brand products are available"})
        }
     })

     //update an existing product
     productApp.put('/products',(req,res)=>{
        //accessing the data
        let updatedProduct=req.body
        //finding the index of the body
        let index=products.findIndex(productObj=>productObj.productId===updatedProduct.productId)
        //if item not found
        if(index==-1){
            return res.json({message:"Item not found"})
        }
        //if item found
        products.splice(index,1,updatedProduct)
        //response
        res.json({message:"Product uppdated successfully"})

     })

     //deleting the existing product  by product id
     productApp.delete('/products/:productId',(req,res)=>{
        //getting the id
        let idOfProduct=Number(req.params.productId)
        //finding the index of the product
        let index=products.findIndex(productObj=>productObj.productId===idOfProduct)
        //if product not found
        if(index===-1){
            return res.json({message:"product not found"})
        }
        //if product found
        products.splice(index,1)
        //response
        res.json({message:"Product deleted successfully"})
     })
