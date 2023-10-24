import jwt from "jsonwebtoken";

//Create token and savig it in cookies
const sendToken=(user,statusCode,res)=>{
    
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY);
    //options for cookies
    const options={
        expires:new Date(Date.now()+90*24*24*60*1000),
        httpOnly:true
    };
    try{
        res.status(statusCode).cookie("token",token,options).json({
            success:true,
            user,
            token
        });
        console.log("Cookie has been created");
    }catch(err){
        console.log(err);
    }
};

export default sendToken