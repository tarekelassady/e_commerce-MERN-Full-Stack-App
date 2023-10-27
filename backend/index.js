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

const app = express();
dotenv.config();

//Connect to db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
  } catch (error) {
    throw error;
  }
}
app.use(cors(
  // {
  //   origin: "http://localhost:3000",
  //   credentials: true
  // }
));
app.use(express.json());
app.use(cookieParser());
app.use("/users", usersController);
app.use("/products", productsController);
app.use("/carts", cartsController);
app.use("/orders", ordersController);
app.use("/payment", stripeController);
app.use("/uploads", express.static("uploads"));


const port = process.env.PORT || 5000
const server = app.listen(port, () => {
  connectDB();
  console.log("Connected to backend!")
});

// Handling unhandled rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for the error ${err.message}`);
  console.log("Shutting down the server for unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  })
});

//Handling uncaught exeptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`)
  console.log("Shutting down the server for handling uncaught exeptions");
})