import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
   lastname :{
        type:String,
        required:true,
    },
    email :{
        type:String,
        required:true,
    },
    salary :{
        type:Number,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})


const user = mongoose.model('User', UserSchema)

export default user