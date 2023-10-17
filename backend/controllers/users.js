import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyUser.js";

const router=express.Router();

//register
router.post("/register", async(req,res)=>{
    try{
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            isAdmin:req.body.isAdmin
        })    
        const registeredUser=await newUser.save();
        res.status(201).json(registeredUser);
    }catch(err){
        res.status(500).json(err);

    }
    
})

//Login
router.post("/login",async(req,res)=>{
    try{
        const getUser=await User.findOne({username:req.body.username});
        if(!getUser) return res.status(404).json("The username "+req.body.username+" is not found");
        const isCorrectPassword=await bcrypt.compare(req.body.password,getUser.password)
        if(!isCorrectPassword) return res.status(400).json("Wrong password");
        const {password,...otherCredentials}=getUser._doc;
        //jsonwebtoken
        const accessToken=jwt.sign({id:getUser._id, isAdmin:getUser.isAdmin},process.env.JWT_SECRET_KEY);
        //cookies
        res.cookie("access_token",accessToken,{
            httpOnly:true,
        }).status(200).json({...otherCredentials});
        // res.status(201).json({...otherCredentials,accessToken});
    }catch(err){
        return res.status(500).json(err);
    }
    
})

//logout
router.post("/logout",async(req,res,next)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true,
    }).status(200).json("User has been logged out.");
})

//Update user
router.put("/:id",verifyUser, async(req,res)=>{
    try{
        const salt=bcrypt.genSaltSync(10);
        const hash=req.body.password && bcrypt.hashSync(req.body.password,salt);
        const {password,...otherDetails}=req.body;
        const updatedUser=await User.findByIdAndUpdate(
            req.params.id,
            {$set:{password:hash,...otherDetails}},
            {new:true});
            res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
    
    
})

//Delete user
router.delete("/:id",verifyAdmin, async(req,res)=>{
    try{
        const deletedUser=await User.findByIdAndDelete(req.params.id);
        res.status(200).json("The user "+deletedUser.username+ " has been deleted successfully");
    }catch(err){
        res.status(500).json(err);
    }
    
})

//Get user
router.get("/:id", verifyAdmin,async(req,res)=>{
    try{
        const requestedUser=await User.findById(req.params.id);
        const {password,...otherCredentials}=requestedUser._doc
        res.status(200).json({...otherCredentials});
    }catch(err){
        res.status(500).json(err);
    }
})

// //Get all users
// router.get("/",verifyAdmin,async(req,res)=>{
//     try{
//         const allUsers=await User.find();
//         res.status(200).json(allUsers);
//     }catch(err){
//         res.status(500).json(err);
//     }
// })


// Get (limit) of (num) users sorted by id (asc or desc) or get all users instead
router.get("/",verifyAdmin,async(req,res)=>{
    try{
        const limit=req.query.limit; //get limited user or all users
        const num=req.query.num; //num of user to get
        const desc=req.query.desc; //users are sorted asc or desc
        // const username=req.body.username //get the username or part of it
        const allUsers=limit ?
        await User.find().sort({_id:desc?-1:1}).limit(num) //get latest asc or desc
        : await User.find(); //get all users
        // : await User.find({'username': {'$regex': `.*${username}.*`, $options: 'i'}}); //get all users with a username or part of it
        res.status(200).json(allUsers);
    }catch(err){
        res.status(500).json(err);
    }
})


// Stats
router.get("/stats/users-by-month",verifyAdmin,async(req,res)=>{
    const today=new Date(); //Today
    const lastYear=new Date(today.setFullYear(today.getFullYear()-1)); //the same day last year
    try{
        const groupUsers=await User.aggregate([
            {$match:{createdAt:{$gte:lastYear}}}, //where the field (createdAt) >= lastYear
            {$group:{_id:{$month:"$createdAt"}, //grouped by $month [month(createdAt)] also can be $year or $dayOfMonth or ... 
            total:{$sum:1}, //get the total count ($sum:1)
        }}, 
            {$addFields:{month:"$_id"}}, //change the name of _id returned field to "month" for example.
            {$project:{_id:0}}, //hide _id field 
            {$sort:{month:1}}, //sorted by month field (_id (month of createdAt)) asc (-1 for desc)
            
        ])
        res.status(200).json(groupUsers);
    }catch(err){
        res.status(err).json(err);
    }
    
})

// router.get("/stats",verifyAdmin,async(req,res)=>{
//     const today=new Date(); //Today
//     const lastYear=new Date(today.setFullYear(today.getFullYear()-1)); //the same day last year
//     try{
//         const groupUsers=await User.aggregate([
//             {$match:{createdAt:{$gte:lastYear}}}, //where the field (createdAt) >= lastYear
//             // {$project:{month:{$month:"$createdAt"}}},
//             {$group:{_id:{$month:"$createdAt"}, //grouped by $month [month(createdAt)] also can be $year or $dayOfMonth or ... 
//             total:{$sum:1}, //get the total count ($sum:1)
//             usernames:{$push:"$username"}, //add a field called usernames to list returned usernames
//         }},  
//             {$sort:{_id:1}}, //sorted by _id (month of createdAt) asc (-1 for desc)
//             {$addFields:{month:"$_id"}}, //change the name of _id returned field to "month" for example.
//             {$project:{_id:0}}, //hide _id field
//             {$limit:1}// to limit the number of returned results
//         ])
//         res.status(200).json(groupUsers);
//     }catch(err){
//         res.status(err).json(err);
//     }
    
// })



export default router;