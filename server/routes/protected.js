const express = require("express")
const { authenticateToken } = require("../middlewares/auth.js")

const router = express.Router();

router.get('/protected', authenticateToken, (req, res) => {
  //   res.json({ message: 'Access granted', user: req.user });
  try {
    res.json({ message: 'Access granted', user: req.user });
  } catch (error) {
    console.error('Error in protected route:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router
