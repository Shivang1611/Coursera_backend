import express from "express";

const courseRouter = express.Router();

courseRouter.post("/course/purchase", function (req, res) {
  //you would expect the user to pay mooney or buy any courses
  res.send("Course purchased successfully");
  // res.json({
  //   message: "Course purchased successfully",
  // });
});
courseRouter.get("/course/preview", function (req, res) {
  res.send("Course preview fetched successfully");
  res.json({
    message: "Courses fetched successfully",
  });
});

export default courseRouter;
