const mongoose=require("mongoose");

var userSchema=new mongoose.Schema({
    googleId:{
        type:String
    },
    displayName:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    image:{
        type:String
    }
},{timestamps:true});

module.exports=mongoose.model('googleLogin',userSchema);