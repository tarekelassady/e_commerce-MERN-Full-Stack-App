import express from "express";
import Cart from "../models/cart.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyUser.js";

const router=express.Router();

//Create product
router.post("/",verifyToken,async(req,res)=>{
    try{
        const newCart=new Cart(req.body);
        const addedCart=await newCart.save();
        res.status(200).json(addedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

//Get user cart
router.get("/:userId",verifyUser,async(req,res)=>{
    try{
        const cart=await Cart.findOne({userId:req.params.userId});
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err);
    }
});

//Get all carts
router.get("/",verifyAdmin,async(req,res)=>{
    try{
        const carts=await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
})

//Update product
router.put("/:id",verifyUser,async(req,res)=>{
    try{
        const updatedCart=await Cart.findByIdAndUpdate(
            req.params.id,
            {$set:req.params.quantity},
            {$new:true});
            res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete product
router.delete("/:id",verifyUser,async(req,res)=>{
    try{
        const deletedCart=await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

export default router;