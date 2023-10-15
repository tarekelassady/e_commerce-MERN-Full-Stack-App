import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyUser.js";
import Product from "../models/product.js"
import product from "../models/product.js";
import mongoose from "mongoose";

const router=express.Router();

// Create product
router.post("/",verifyAdmin,async(req,res)=>{
    try{
        const newProduct= new Product(req.body);
        const createProduct=await newProduct.save();
        res.status(200).json(createProduct);
        
    }catch(err){
        res.status(500).json(err);
    }
});

//Updae product
router.put("/:id",verifyUser,async(req,res)=>{
    try{
        const updateProduct= await Product.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true});
        res.status(200).json(updateProduct);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete product
router.delete("/:id",verifyAdmin,async(req,res)=>{
    try{
        const deleteProduct=await product.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteProduct);
    }catch(err){
        res.status(500).json(err);
    }
});

// search
router.get("/search",async(req,res)=>{
    try{
        
        const result=await Product.find({colors:req.query.color});
        res.status(200).json(result);
    }catch(err){
        res.status(500).json(err);
    }

});
//Get a product
router.get("/:id",async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get products by category
router.get("/category/:cat",async(req,res)=>{
    try{
        const products=await Product.find({categories:req.params.cat});
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get products
router.get("/",async(req,res)=>{
    try{
        const limit=req.query.limit;
        const desc=req.query.sort;
        const products=req.query.limit ?
        await Product.find().sort({_id:desc?-1:1}).limit(limit)
        : await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
});


// Stats
router.get("/stats/count-by-category",async(req,res)=>{
    try{
        const products_stats=await Product.aggregate([
            {$unwind:"$categories"},
            {$group:{_id:"$categories",total:{$sum:1}}},
            {$addFields:{category:"$_id"}},
            {$project:{_id:0}},
            {$sort:{category:-1}}
        ])
        res.status(200).json(products_stats);
    }catch(err){
        res.status(500).json(err);
    }
})

// featured
router.get("/aggr/featured",async(req,res)=>{
    try{
        let productId = "652039168957349f9e16e63d";
        const featured=await Product.aggregate([
            {$match: { _id: new mongoose.Types.ObjectId(req.query.id) }},
            {$unwind:"$imgs"},
            {$group:{_id:"$imgs.featured"}},
            // {$addFields:{featured:"$_id"}}
            
        ])
        res.status(200).json(featured);
    }catch(err){
        res.status(500).json(err);
    }
});

export default router;