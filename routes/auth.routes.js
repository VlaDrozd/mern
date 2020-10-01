const { Router } = require("express");

const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../model/User");
const router = Router();

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Incorrect email").isEmail(),
    check("pass", "Incorrect password length").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), message: "Incorrect data" });
      }

      const { email, pass } = req.body;

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Error, already exists" });
      }

      const hashedPassword = await bcrypt.hash(pass, 12);

      const user = new User({ email, pass: hashedPassword });

      await user.save();

      res.status(201).json({ message: "User created" });
    } catch (error) {
      res.status(500).json({ message: "Error" });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Incorrect email").normalizeEmail().isEmail(),
    check("pass", "No password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(400)
          .json({ errors: errors.array(), message: "Incorrect data" });
      }

      const { email, pass } = req.body;

      const user = await User.findOne({ email });
      const isMatch = await bcrypt.compare(pass, user.pass);

      if (!user || !isMatch) {
        return res.status(400).json({ message: "Error, incorrect data" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.status(200).json({ token, userId: user.id });
    } catch (error) {
      res.status(500).json({ message: "Error" });
    }
  }
);

module.exports = router;
