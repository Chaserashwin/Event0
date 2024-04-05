const mongoose=require("mongoose");

var addEventSchema=mongoose.Schema({
   catId:Number,
   title:String,
   mainImg:String,
   events:{
    id:Number,
    src:String,
    eventInfo:{
        eventname:String,
        location:String,
        ticketPrice:Number,
        numberOfSeats:Number,
        likes:Number,
        organizer:String,
        data:String,
        time:String
    }
   },
   

})

module.exports=mongoose.model('AddEvent',addEventSchema);