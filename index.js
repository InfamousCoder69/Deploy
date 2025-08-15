import express from "express";
import 'dotenv/config'
const app=express();
const port=process.env.PORT;
app.get("/",(req,res)=>{
    res.end(`HI on Port:${port}`)
})
app.get("/preview",(req,res)=>{
    res.end("Get a job bruh!")
})
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})