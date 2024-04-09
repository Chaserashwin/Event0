const mongoose = require("mongoose");

var addEventSchema = mongoose.Schema({
  eventcategory: {
    type: String,
  },
  eventname: {
    type: String,
  },
  imageUpload: {
    type: String,
  },
  location: {
    type: String,
  },
  ticketPrice: {
    type: Number,
  },
  description: {
    type: String,
  },
  likes: {
    type: Number,
  },
  organizer: {
    type: String,
  },
  eventdate: {
    type: String,
  },
  eventtime: {
    type: String,
  },
});

module.exports = mongoose.model("AddEvent", addEventSchema);
