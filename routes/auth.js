const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({
  _id: user._id,
  name: user.name,
  email: user.email
});
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    // user se data lo
    const { email, password } = req.body;

    // email se user find karo
    const user = await User.findOne({ email });

    // agar user nahi mila
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // password check karo
const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // token generate karo
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // response bhejo
    res.json({
      message: "Login successful",
      token: token
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});
module.exports = router;