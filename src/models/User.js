const mongoose = require("mongoose");

// Shape data
const userSchema = new mongoose.Schema({
  name: String,
  city: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
