import express from "express";
import { userModel } from "../db.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userRouter = express.Router();

const JWT_USER_PASSWORD = "123abc"; // This should be stored in an environment variable for security

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; //we are missing the zord va;lidation
  //todo hash the password so that not stored in db

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error signing up user:", error);
    res
      .status(500)
      .json({ error: "Internal server error", error: error.message });
  }
});

userRouter.post("/user/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  //todo hash the password so that not stored in db
  const user = await userModel.findOne({ email });
  //idealy password id ased then we do not compare the db passowrd and user provided passwor d

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  } else {
    const token =jwt.sign(
      {
        userId: user._id,
      },JWT_USER_PASSWORD );
    }
    //do cookie logic
  
  // Compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  res.json({ message: "User signed in successfully" });
});

userRouter.get("/purchases", function (req, res) {
  req.json({
    message: "User purchases fetched successfully",
  });
});

export default userRouter;
