import express from "express";
import Order from "../models/order.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyUser.js";

const router=express.Router();

//Create order
router.post("/",verifyToken,async(req,res)=>{
    try{
        const newOrder=new Order(req.body);
        const addedOrder=await newOrder.save();
        res.status(200).json(addedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});


//Get user order
router.get("/:userId",verifyAdmin,async(req,res)=>{
    try{
        const orders=await Order.find({userId:req.params.userId});
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err);
    }
});


//Get all orders
router.get("/",verifyAdmin,async(req,res)=>{
    try{
        const orders=await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
})



//Update order
router.put("/:id",verifyAdmin,async(req,res)=>{
    try{
        const updatedOrder=await Order.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {$new:true});
            res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete order
router.delete("/:id",verifyAdmin,async(req,res)=>{
    try{
        const deletedOrder=await Order.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//Get monthly income
router.get("/stats/income-by-month",verifyAdmin,async(req,res)=>{
    try{
        const today=new Date();
        const lastYear=new Date(today.setFullYear(today.getFullYear()-1));
        const stats=await Order.aggregate([
            {$match:{createdAt:{$gte:lastYear}}},
            {$group:{_id:{$month:"$createdAt"},total:{$sum:"$amount"}}},
            {$addFields:{month:"$_id"}},
            {$project:{_id:0}}
        ]);
        res.status(200).json(stats);
    }catch(err){
        res.status(500).json(err);
    }
});


export default router;