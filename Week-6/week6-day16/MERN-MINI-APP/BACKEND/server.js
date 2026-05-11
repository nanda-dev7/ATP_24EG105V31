import exp from "express";
import {config} from "dotenv";
import {connect} from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import {employeeApp} from "./API/EmployeeAPI.js";

config();
const app = exp();
const port = process.env.PORT || 5000;

// enable CORS for Vite frontend
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(exp.json());
app.use(cookieParser());

app.use("/employee", employeeApp);

// Database Creation

const ConnectDB=async()=>{
        try{
            await connect(process.env.DB_URL)
            console.log("DataBase connected")
            // assign port
            const port =process.env.PORT || 5000;
            app.listen(port,()=> console.log(`server listening on ${port}...`))
        } catch(err){
            console.log("Error in data base connection",err)
        }
    };
ConnectDB();

// to handle invalid path 
app.use((req,res)=>{
    res.status(404).json({message:"Path not found"})
});

// to handle err we use middleware
app.use((err,req,res,next)=>{//error handling middleware parameters have 4 parameters
    //res.status().json({message:"error occured",error:err.message})

    //validator error
    console.log(err.name)
    if(err.name==='ValidatorError'){
        return res.status(400).json({message:"error occured ",error:err.message})
    }
    //cast error
    if(err.name==='CastError'){
        return res.status(400).json({message:"error occured",error:err.message})
    }

    //send server error
    res.status(500).json({message:"error occured ",error:err.message})
})