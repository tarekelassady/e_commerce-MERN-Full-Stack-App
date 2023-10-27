import React from 'react'
import { useState, useEffect } from 'react';
import "./add_product.scss"
import ProductVariables from './ProductVariables';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlinePlus, AiOutlineSave } from "react-icons/ai";

const AddProduct = () => {
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const [getTitle, setTitle] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getProductVariables, setProductVariables] = useState([]);

  
  const addProductVariables = () => {
    setProductVariables(prev => [...prev, { id: Date.now(), color: "" }]);
  }


  const addProduct = async () => {
    const variablesToSave = getProductVariables.filter(variable => variable.color);//exclude empty ProductVariables
    try {
      const res = await axios.post(`${backendURL}/products`, {
        title: getTitle,
        description: getDescription,
        categories: ["closets"],
        variables: variablesToSave,
      })
      toast.success("The product has been saved successfully")
    } catch (err) {
      toast.error(err.response.message);
    }
  }

  // useEffect(()=>{
  //   console.log(getProductVariables);
  // },[getProductVariables])

  return (
    <div className='add-product'>
      <input type="text" id="title" placeholder="Product Title" value={getTitle} onChange={(e) => setTitle(e.target.value)} />
      <textarea type="text" id="description" placeholder="Product Description" value={getDescription} onChange={(e) => setDescription(e.target.value)} />
      <div className='add-product-variables'>
        {getProductVariables && getProductVariables.map((item) => (
          <ProductVariables key={item.id} id={item.id} setProductVariables={setProductVariables} getProductVariables={getProductVariables} />
        ))}
        <AiOutlinePlus className="btn-add" onClick={addProductVariables} />
      </div>
      <button className="btn-add-product" onClick={addProduct} disabled={!getTitle || !getDescription} >Add Product <AiOutlineSave /></button>
    </div>
  )
}

export default AddProduct
