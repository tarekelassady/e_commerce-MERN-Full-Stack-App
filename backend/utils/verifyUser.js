import jwt from "jsonwebtoken";

const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    console.log(token)
    if(!token) return res.status(401).json("You are not authenticated");
    
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if (err) return res.status(403).json("Token is invalid!");
        req.user=user;
        next();
    })
}



const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not authorized to complete this task");
        }
    })
}

const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not authorized to complete this task");
        }
    })
}

export  {verifyToken,verifyUser,verifyAdmin};