import express from 'express';
import userRouter from './routes/user';
import courseRouter from './routes/course';
import adminRouter from './routes/admin';


//routing in express , the epress router and how it will help ypu stricture your application a little better 
const express = require('express')
const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin", adminRouter);


// not a better way to do routing 
// createuserRouts(app);
// createcourseRoutes(app)


app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})
