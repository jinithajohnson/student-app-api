const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const student=require("./models/student")

const app =express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/contact",(req,res)=>{
    res.send("welcome to my new page")
})

app.listen(8080,()=>{
    console.log("server started")
})

