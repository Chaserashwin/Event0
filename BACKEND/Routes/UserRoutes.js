const express = require("express");
var upload = require("../uploadmodule");
var cors = require("cors");


var userRoutes = express.Router();
var userCtrl = require("../Controller/UserController");
var verifyjwt = require("../Config/jwtVerify");
//to add events
userRoutes.post("/addEvent", upload.single("imageUpload"), userCtrl.addEvent);
//for login signup
userRoutes.post("/register", userCtrl.Register);
userRoutes.post("/login", userCtrl.loginUser);
userRoutes.get("/myprofile", verifyjwt.verifyToken, userCtrl.profile);
//for displaying events
userRoutes.get("/displayevent", userCtrl.display);
//for find event
// userRoutes.post("/events",userCtrl.findEvent)
//for login with google
userRoutes.get("/auth/google", userCtrl.loginWithGoogle);
userRoutes.get("/auth/google/callback", userCtrl.googleCallback);
userRoutes.get("/login/success", userCtrl.loginSuccess);

module.exports = userRoutes;

