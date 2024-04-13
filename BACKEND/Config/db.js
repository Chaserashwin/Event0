var dotenv=require("dotenv").config();
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://chaserashwin:L9znbBuimFs8kI5I@projectdb.izmrs9k.mongodb.net/?retryWrites=true&w=majority&appName=Projectdb')
.then(()=>{console.log("Database Connected successfully");})
.catch((err)=>{console.log(err);})
