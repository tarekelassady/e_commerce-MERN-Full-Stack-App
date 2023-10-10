import express from "express";
import Stripe from "stripe";    

const router=express.Router();
const be_stripe=new Stripe(process.env.STRIPE_KEY);

router.post("/",async(req,res)=>{
    console.log("payment backend")
    await be_stripe.charges.create(
        {
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:"usd",
        },
        (err,data)=>{
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(data);
            }
        }
    )
});

export default router;