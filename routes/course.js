import { express } from "express";

const courseRouter = express.Router();

courseRouter.post("/course/purchase", function (req, res) {
  //you would expect the user to pay mooney or buy any courses
  res.json({
    message: "Course purchased successfully",
  });
});
courseRouter.get("/courses/preview", function (req, res) {
  res.json({
    message: "Courses fetched successfully",
  });
});

export default courseRouter;
