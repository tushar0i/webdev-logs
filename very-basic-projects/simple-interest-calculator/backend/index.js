const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000

app.use(cors())
// app.use(express.json())

app.get('/simpleinterest',(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const c = parseInt(req.query.c)

    const value = (a*b*c)/100 
    const answer = `Answer : ${a} + ${value}`

    res.send(answer.toString());
})

app.use((err,req,res,next)=>{
    console.error(err)
    res.send("something is up with the server try again after some time")
})

app.listen(PORT ,()=>{
    console.log(`Sever is running on http://localhost:${PORT}`)
})