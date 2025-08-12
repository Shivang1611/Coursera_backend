import express from 'express';

const express = require('express')
const app = express()
const port = 3000
app.post("/user/signup",function(req,res)
{
    req.json({
        message: "User signed up successfully"
    })
})
app.post("/user/signin",function(req,res)
{
    req.json({
        message: "User signed in successfully"
    })
})
app.get("/user/purchases",function(req,res)
{
    req.json({
        message: "User purchases fetched successfully"
    })
})

app.get("/user/course",function(req,res)
{
    res.json({
        message: "Course fetched successfully"
    })
})
app.post("/course/purchase",function(req,res)
{
    //you would expect the user to pay mooney or buy any courses
    res.json({
        message: "Course purchased successfully"
    })
})
app.get("/courses",function(req,res)
{
    res.json({
        message: "Courses fetched successfully"
    })
}     )  




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
