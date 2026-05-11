
import exp from 'express'
export const userApp = exp.Router()  
// we created a router to connect the main server.js
import {hash,compare} from 'bcryptjs'   
// comapre it converts the plain password to hashed pass and it checks
// used to interact with the mongodb db
import { UserModel } from '../models/UserModel.js'
// Used for authentication tokens.
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
const {sign}=jwt



// user login 
userApp.post('/auth',async (req,res)=>{
    // get user cred obj from client
    const {email,password}=req.body;
    // verify the email
    let user = await UserModel.findOne({email:email})
    // if email is not existed
    if(user===null){
        return res.status(400).json({message:"Invalid email"})
    }
     // compare passwords
   let  result= await compare(password,user.password) 
      // if password not matches
      if(result===false){
        return res.status(400).json({message:"Invalid Password"})
      }
// if password matches
  // create token (jsonwebtoken -jwt -jaat)
  const signedToken=sign({email:user.email},"abcdef",{expiresIn:"3h"}) 
  // send token as httpOnly cookie
  res.cookie("token",signedToken,{
    httpOnly:true,
    sameSite:"lax",
    secure:false
  })
// send res
res.status(200).json({message:"login successful",payload:user})
})  





// Create user 
userApp.post("/users", async (req,res)=>{ 
// get a new user obj from req
    const newUser = req.body
// hash the password
const hashedPassword=await hash(newUser.password,10)
//replace plain password with hashed password
newUser.password=hashedPassword
    const newUserDocument = new UserModel(newUser)

    const result=await newUserDocument.save();
    console.log("result:",result)

    res.status(201).json({message:"UserCreated"})
});


// Read all users (protected route)
//A route is protected when authentication middleware runs before the route execute

userApp.get("/users",verifyToken,async(req,res)=>{
     // read all users from db
     let usersList=await UserModel.find()
     // send res
     res.status(200).json({message:"users",payload:usersList})
})

// read usr by id 
userApp.get("/users/:id",verifyToken, async (req, res) => {

    // read object id from req params
    const uid = req.params.id

    // find user by id
    const userObj = await UserModel.findById(uid);
    // if user not found 
    if(!userObj){
       return res.status(404).json({message:"User is not found"})
    }
    // send response
    res.status(200).json({
        message: "user",
        payload: userObj
    })

})


// Update a user byid
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    // get modified user from req
    const modifiedUser=req.body;
    const uid=req.params.id;
    // find user by id and update
    const UpdateUser=await UserModel.findByIdAndUpdate(uid,{$set:{ ...modifiedUser}},{new:true,runValidators:true});

// send response 
res.status(200).json({message:"User modified",payload:UpdateUser})
})



// delete by user id 
userApp.delete("/users/:id",verifyToken,async(req,res)=>{
    // read object id from req params
    const uid = req.params.id
    // find user by id
    const deletedUser = await UserModel.findByIdAndDelete(uid)
    if(!deletedUser){
        return res.status(404).json({message:"User is not found "})
    }
    // delete user 
    res.status(200).json({message:"User deleted",payload:deletedUser})
})







