const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

