import express from "express";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
const app=express();

dotenv.config();
const connectDB=async()=>{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
}
const port=process.env.PORT || 8800
app.listen(port,()=>{
    connectDB();
    console.log("connected to server");
})