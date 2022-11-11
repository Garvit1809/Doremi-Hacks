const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    bio: String,
    stageName: String,
    role: {
        type: String,
        enum: ['singer', 'musician', 'musicLabel', 'musicProducer', 'user'],
        default: 'user'
      }, 
    socials: {
        twitter: String,
        linkedIn: String,
        github: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;