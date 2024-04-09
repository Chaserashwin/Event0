const mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var newUserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  saltString: {
    type: String,
  },
});

newUserSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltString = salt;
      next();
    });
  });
});

module.exports = mongoose.model("register", newUserSchema);
