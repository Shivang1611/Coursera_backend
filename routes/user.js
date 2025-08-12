import express from "express";

const userRouter = express.Router();

 
  userRouter.post("/signup", function (req, res) {
    req.json({
      message: "User signed up successfully",
    });
  });
 userRouter.post("/signin", function (req, res) {
    req.json({
      message: "User signed in successfully",
    });
  });
  userRouter.get("/purchases", function (req, res) {
    req.json({
      message: "User purchases fetched successfully",
    });
  });


export default userRouter;
