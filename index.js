//require('dotenv').config();
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import express from "express";
import userRouter from "./routes/user.js";
import courseRouter from "./routes/course.js";
import adminRouter from "./routes/admin.js";
import connectDB from "./datab/connectwithmongo.js";

//routing in express , the epress router and how it will help ypu stricture your application a little better

const app = express();
app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);
app.use("/api/v1", adminRouter);

// not a better way to do routing
// createuserRouts(app);
// createcourseRoutes(app)

await connectDB();

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
