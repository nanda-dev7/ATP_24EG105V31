// create express app
import exp from 'express'     // Express is used to create the server and APIs
import {connect} from 'mongoose' // used to connect node.js to mongodb
import { userApp } from './APIs/UserAPI.js' // imports the user routes
import { productApp } from './APIs/ProductAPI.js' // imports the product routes 
import cookieParser from 'cookie-parser' // middle ware helps to read the cookies from browser req
import {config} from 'dotenv'
config(); // will expose all the env to the process// process.env.PORT, 
const app=exp() // it creates the  main express application

// Express provides a framework to build APIs easily
const product=exp()
// add body parser 
app.use(exp.json())  //. json--> converts the data into js objects
product.use(exp.json())

// add cookie parser middleware it converts the json into javascript objects
app.use(cookieParser())
// forward req to UserApp if path starts with /user-api
app.use("/user-api",userApp) // connecting apis 
app.use("/product-api",productApp)

/* async--> makes function return a Promise
 await --> waits for promise result without blocking server */

const port=process.env.PORT || 4000 // fallback || 4000

// connect to DB server
async function connectDB(){ // database connection is async
    try{
    await connect(process.env.DB_URL);
    
    console.log("DB Connection success")   // await and async are same as then catch methods 
    // After connection the database succesful http request[ you must connect database connection]
    // start server 
    app.listen(4000,()=>console.log("server listening to the port "))
    }catch(err){
        console.log("err in DB connection:",err)
    }
}
connectDB()

// error handling middleware
app.use((err,req,res,next)=>{
  
   // ValidationError
  if(err.name==='ValidationError'){
    return res.status(400).json({message:"error occured",error:err.message});
  }
  // CastError
  if(err.name==='CastError'){
    return res.status(400).json({message:"error occured",error:err.message});
  }
 // send server side error
 res.status(500).json({message:"error occured",error:"Server Error"})




})

// error ==> {name,message,callStack}

// Tcpip and http relation ship
/* 
Client Request
      ↓
server.js
      ↓
Middleware
(JSON parser, cookie parser)
      ↓
Route Matching
/user-api or /product-api
      ↓
UserAPI.js / ProductAPI.js
      ↓
Model
(UserModel / ProductModel)
      ↓
MongoDB
      ↓
Response sent to client */