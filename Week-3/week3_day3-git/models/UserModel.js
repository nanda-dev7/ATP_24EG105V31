// user model helps us to how the data of user is stored in a database
 import { Schema, model } from "mongoose" // schema --> stru of data 
 // model --> creates the mongodb collection

// Create User Schema
const userSchema = new Schema(
{
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length of username is 4"],
        maxLength:[10,"Username size is not more than 10"]
    },
    password:{
        type:String,
        required:[true,'Password required']
    },
    email:{
        type:String,
        required:[true,'Email required'],
        unique:[true,"email is already exist"]
    },
    age:{
        type:Number
    }
},
{
    versionKey:false,  // it helps to disable the version key mongodb internally adds the versio key
    timestamps:true // when the data is created or created time and updated time 
}
)

// Generate User Model
export const UserModel = model("user", userSchema)