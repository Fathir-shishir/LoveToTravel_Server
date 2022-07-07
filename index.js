import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
const app = express();

// mongodb+srv://loveToTravel:<password>@cluster0.wqvbo.mongodb.net/?retryWrites=true&w=majority

const port = 5000;
app.use(morgan("dev"));
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello !")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})