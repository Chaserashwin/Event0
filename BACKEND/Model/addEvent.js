const mongoose = require("mongoose");

var addEventSchema = mongoose.Schema({
  catname: {
    type: String,
  },
  eventname: {
    type: String,
  },
  src: {
    type: String,
  },
  location: {
    type: String,
  },
  ticketprice: {
    type: Number,
  },
  ticketsize: {
    type: Number,
  },
  likes: {
    type: Number,
  },
  description: {
    type: String,
  },
  organiser: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});

module.exports = mongoose.model("AddEvent", addEventSchema);
