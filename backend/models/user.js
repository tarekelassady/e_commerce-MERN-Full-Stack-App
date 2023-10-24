import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    name:{type:String,required:[true,"Please enter your name"]},
    username:{type:String, required:[true,"Please enter your username"]},
    email:{type:String, required:[true,"Please enter your email"], unique:true},
    password:{type:String,required:[true,"Please enter your password"]},
    isAdmin:{type:Boolean,default:false},
    phoneNumber:{type:Number},
    addresses:[
        {
            country: {
              type: String,
            },
            city:{
              type: String,
            },
            address1:{
              type: String,
            },
            address2:{
              type: String,
            },
            zipCode:{
              type: Number,
            },
            addressType:{
              type: String,
            },
          }
    ],

},{timestamps:true});

export default mongoose.model("User",UserSchema);