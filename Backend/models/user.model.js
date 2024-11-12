import mongoose from "mongoose";
//Users can be admin,manager or employees
//way to remove user access asap if needed -can be done with active status to user

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:[{
        type:String,
        enum:['Employee','Manager','Admin'],
        default:'Employee'
    }],
    active:{
        type:Boolean,
        default:true
    }
})
const User = mongoose.model('User',userSchema)
 export default User;