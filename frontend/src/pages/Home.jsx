// import React from 'react'
import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import {products} from "../data.js";
import Slider from "../components/slider/Slider"
import LuxuryCloset from "../assets/luxury-closet-unit.webp"
import "./home.scss"
import ProductItem from "../components/Product_Item";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [getProducts,setProducts]=useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{
      try{
        const res=await axios.get(`http://localhost:4000/products`);
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }

    }
    fetchProducts();
  },[])
  return (
    <div>
      <Slider />
      <Categories />
      {/* products section */}
      <div className="products">
        {getProducts.map(product=>(
          <ProductItem className="product" product={product} />
        ))}
      </div>
    {/* contact section */}
      <div className="contact">
        <div className="image" style={{backgroundImage:`url(${LuxuryCloset})`}}>
          {/* <img src={LuxuryCloset} alt="luxury closet" /> */}
        </div>
        <div className="contact-info">
          <h2>How can we assist you today?</h2>
          <p>Contact us, we'll take care of the rest.</p>
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  )
}

export default Home
