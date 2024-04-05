var passport = require("passport");
var passportLocal=require("passport-local").Strategy;
//importing model
var registerUser=require("../Model/newUserModel");
var bcrypt=require("bcrypt");

passport.use(
    new passportLocal({usernameField:"email"},(email,password,done)=>{
        registerUser.findOne({email:email})
        .then((user)=>{
            if(user){
                if(bcrypt.compareSync(password,user.password)==false)
                {
                    return done(null,false,{message:"password not match"})
                }
                return done(null,user);}
            else
                return done(null,false,{message:"User not found"});
        })
        .catch((err)=>{
            return done(err);
        });
    })
);

// to store into session
passport.serializeUser(function(user,cb){
    cb(null,user);
})

//to retrive info from session
passport.deserializeUser(function(user,cb){
    cb(null,user);
})