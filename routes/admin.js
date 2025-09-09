import express from 'express';
import { adminModel } from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_ADMIN_PASSWORD } from '../config.js';


 // This should be stored in an environment variable for security
const adminRouter = express.Router();

adminRouter.post("/admin/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body; //we are missing the zord va;lidation
  //todo hash the password so that not stored in db

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await adminModel.create({
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



  //sign in logic
adminRouter.post("/admin/signin", async function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
try {
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare password with hashed one
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate token
    const token = jwt.sign(
      { userId: admin._id, email: admin.email },
      JWT_ADMIN_PASSWORD, // should be process.env.JWT_ADMIN_PASSWORD
      { expiresIn: "1h" }
    );

    // Send token in response
    res.json({
      message: "User signed in successfully",
      token, // send JWT token here
      admin: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

adminRouter.post("/course", adminMiddleware ,async function (req, res) {
  const adminId=req.userId;
  const {tittle,description,imageUrl,price}=req.body;
  await courseModel.create({
    tittle:tittle,
    description:description,
    imageUrl:imageUrl,
    price:price,
    creatorId:adminId,
  });
  res.json({
    message: "course created succesfully",
    courseId:course._id
  });
});
adminRouter.put("/course", adminMiddleware ,async function (req, res) {
  const adminId=req.userId;
  const {tittle,description,imageUrl,price,courseId}=req.body;
  const course=await courseModel.updateOne({
    _id:courseId,
  createrId:adminId,},
    {
    tittle:tittle,
    description:description,
    imageUrl:imageUrl,
    price:price,

  });


  res.json({
    message: "course updated succesfully",
  });
});

adminRouter.get("/course/bulk", adminMiddleware ,async function (req, res) {
  const adminId=req.userId;
  const courses=await courseModel.find({
   
  createrId:adminId,});


  res.json({
    message: "course updated succesfully",
  });
});



export default adminRouter;