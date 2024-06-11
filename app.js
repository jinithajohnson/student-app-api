const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { studentmodel } = require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jinithajohnson:jingov02@cluster0.wo3ieyl.mongodb.net/studentDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/ad", (req, res) => {
    let input = req.body
    let stud = new studentmodel(input)
    stud.save()
    console.log(stud)
    res.json({status:"success"})
})

app.get("/view",(req,res)=>{

    studentmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080, () => {
    console.log("server started")
})


