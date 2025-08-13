const User = require("../models/User.js")
const bcrypt = require("bcrypt")
const { generateToken } = require("../utils/jwt.js")
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = generateToken(newUser._id.toString());
    res.status(201).json({ message: 'User created successfully', user: newUser, token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
