require('./Config/db');
var express=require("express");
var cors=require("cors");
var passport=require("passport");
var session=require("express-session");
var dotenv=require("dotenv").config();
var routes=require("./Routes/UserRoutes")
var GoogleStrategy=require('passport-google-oauth').OAuth2Strategy;


var app=express();
app.use(session({
    secret:"GoogleOAuth123!",
    resave:false,
    saveUninitialized:false,
}));

var corsOptions={
    credentials:true,
    origin: "http://localhost:5173",
    optionsSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({secret:"PassportSession!!"}));
app.use(passport.initialize());
app.use(passport.session());


app.use("/",routes);




app.listen(2000,(err)=>{
    if (err) console.log(err);
    else console.log("server running on localhost: 2000");
})