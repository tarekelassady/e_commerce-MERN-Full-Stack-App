import "./products.scss";
import { products } from "../data";
import ProductItem from "../components/Product_Item";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const location=useLocation();
  const productCat=location.pathname.split("/")[2];
  const [getProducts,setProducts]=useState([]);
  const [getSearchParams,setSearchParams]=useState({color:"",size:""});
  const [getColor,setColor]=useState("");
  const filter=async(e)=>{
      setSearchParams(prev=>({...prev,[e.target.id]:e.target.value}));
      e.target.id==="color" && setColor(e.target.value.toLowerCase());
    }
  useEffect(()=>{
    const search=async()=>{
      try{
        const res=await axios.get(`http://localhost:4000/products/category/search?color=${getColor}`)
        setProducts(res.data);
      }catch(err){
      console.log(err);
      }
    }
    search();
  },[getColor])
  useEffect(()=>{
    const fetchProducts=async()=>{

      try{
        const res=await axios.get(`http://localhost:4000/products/category/${productCat}`)
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchProducts();
  },[])
  return (
    <div>
      <div className="filter-sort-section">
        <div className="filter-products">
          <h2>Filter Products</h2>
          <input type="text" className="name" placeholder="Product Name" />
          <select name="" id="color" onChange={filter}>
            <option value="" disabled defaultValue>Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <select name="size" id="size" onChange={filter}>
            <option value="" disabled defaultValue> Size</option>
            <option value="xl">XL</option>
            <option value="l">L</option>
            <option value="m">M</option>
            <option value="s">S</option>
            <option value="xs">XS</option>
          </select>
        </div>
        <div className="sort-products">
          <h2>Sort Products</h2>
        <select name="sort-by-price" id="sort-by-price">
            <option value="" disabled defaultValue>Price</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>
      </div>
      <div className="products">
        {getProducts.map(product=>(
          <ProductItem key={product._id} product={product}/>
        ))}
        

      </div>
    </div>
  )
}

export default Products
