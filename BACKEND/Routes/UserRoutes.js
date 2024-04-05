const express=require("express");
var upload=require('../uploadmodule')
var cors=require("cors")

var userRoutes=express.Router();
var userCtrl=require("../Controller/UserController");
var verifyjwt=require("../Config/jwtVerify");

userRoutes.post("/addEvent",upload.single("imageUpload"),userCtrl.addEvent);
userRoutes.post("/register",userCtrl.Register);
userRoutes.post("/login",userCtrl.loginUser);
userRoutes.get("/myprofile",verifyjwt.verifyToken,userCtrl.profile);
userRoutes.get("/addEvent",userCtrl.addEvent)
userRoutes.post("/events",userCtrl.findEvent) 

userRoutes.get('/auth/google',userCtrl.loginWithGoogle)
userRoutes.get('/auth/google/callback',userCtrl.googleCallback)
userRoutes.get("/login/success",userCtrl.loginSuccess)


module.exports=userRoutes;