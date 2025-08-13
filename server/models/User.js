
const mongoose = require("mongoose")
const { Schema } = mongoose 

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: false },
    googleId: { type: String, required: false },
    isAuthenticated: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = {User}
