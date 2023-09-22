const express=require('express')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())

// Router
const book =require("./Routes/bookRoute")
app.use("/api/v1",book);



module.exports=app;