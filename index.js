import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
const app = express();
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
// mongodb+srv://loveToTravel:<password>@cluster0.wqvbo.mongodb.net/?retryWrites=true&w=majority


app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/users", userRouter); 
app.use("/tour", tourRouter);
const MONGODB_URL =`mongodb+srv://loveToTravel:1122334466@cluster0.wqvbo.mongodb.net/Travel_DB?retryWrites=true&w=majority`
const port = process.env.PORT || 5000;

mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`)
    })
    
})
.catch((error)=>console.log(`${error} did not connect`))