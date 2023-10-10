import mongoose from "mongoose";

const ProductSchema=mongoose.Schema({
    title:{type:String,required:true},
    imgs:{type:Array},
    description:{type:String},
    categories:{type:Array,required:true},
    size:{type:Array},
    colors:{type:Array},
    price:{type:Number,required:true},
    inStock:{type:Number,required:true}

},{timestamps:true});

export default mongoose.model("Product",ProductSchema);