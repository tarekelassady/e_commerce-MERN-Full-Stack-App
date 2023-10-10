import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import usersController from "./controllers/users.js"
import productsController from "./controllers/products.js";
import cartsController from "./controllers/carts.js";
import ordersController from "./controllers/orders.js";
import stripeController from "./controllers/stripe.js";

const app=express();
dotenv.config();

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
      } catch (error) {
        throw error;
      }
}
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/users",usersController);
app.use("/products",productsController);
app.use("/carts",cartsController);
app.use("/orders",ordersController);
app.use("/backend/payment",stripeController);


const port=process.env.PORT || 8800
app.listen(port, ()=>{
    connectDB();
    console.log("Connected to backend!")});