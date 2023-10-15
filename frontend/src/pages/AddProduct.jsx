import React from 'react'
import { useState,useEffect } from 'react';

const AddProduct = () => {
    
  const [getColor,setColor]=useState("red");
  const [getImages,setImages]=useState([]);
  const [getFeatured,setFeatured]=useState([false,false]);
  const [getImgs,setImgs]=useState([]);
  const [getVariables,setVariables]=useState(null);



  const handlUploadImage=(e)=>{
    setImages([...e.target.files])
    // const imgs=[];
    // getImages.forEach(image=>imgs.push({url:URL.createObjectURL(image),featured:true}));
    // featured.forEach((feature,i)=>imgs.forEach((img,imgIndex)=>i===imgIndex&&imgs.splice(i,1,{...img,featured:feature})))
    
    
  }
  useEffect(()=>{
    // setImgs(getImages.map((img,i)=>({url:URL.createObjectURL(img),featured:getFeatured[i]})))
    setVariables({color:getColor,imgs:getImages.map((img,i)=>({url:URL.createObjectURL(img),featured:getFeatured[i]}))})
    
  },[getImages]);

  
  console.log(getVariables);
  return (
    <div>
      <label htmlFor="upload-image">Upload file</label>
      <input type="file" multiple id="upload-image" accept=".jpg,.webp" onChange={handlUploadImage}/>
      {getVariables&&getVariables.imgs.map(image=>(
        <img src={image.url} />
      ))}
    </div>
  )
}

export default AddProduct
