import {express} from 'express';


const adminRouter = express.Router();

adminRouter.post("/signup", function (req, res) {
    req.json({
      message: "User signed up successfully",
    });
  });
adminRouter.post("/signin", function (req, res) {
    req.json({
      message: "User signed in successfully",
    });
  });
adminRouter.post("/course", function (req, res) {
  res.json({
    message: "create the course successfully",
  });
}   );

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "changed the the course successfully",
  });
});
adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: "get all the course succesfully",
  });
});



export default adminRouter;