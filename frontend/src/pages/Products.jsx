import "./products.scss";
import { products } from "../data";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const location = useLocation();
  const [getProducts, setProducts] = useState([]);
  const [getTitle, setTitle] = useState("");
  const productCat = location.pathname.split("/")[2];
  const [getColor, setColor] = useState("");
  // const [getSearchParams,setSearchParams]=useState({title:"",color:"",size:""});


  // const handleFilters=async(e)=>{
  //     // setSearchParams(prev=>({...prev,[e.target.id]:e.target.value}));
  //     setSearchParams({...getSearchParams,[e.target.id]:e.target.value});
  //     e.target.id==="color" && setColor(e.target.value);
  //   }
  useEffect(() => {
    const search = async () => {
      try {
        const res = await axios.get(`${backendURL}/products/search?title=${getTitle}&color=${getColor}`)
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    search();
  }, [getTitle, getColor]);

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "";
      try {
        if (productCat) {
          url = `${backendURL}/products/category/${productCat}`;
        } else {
          url = `${backendURL}/products`
        }
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, [])
  return (
    <div>
      <div className="filter-sort-section">
        <div className="filter-products">
          <h2>Filter Products</h2>
          <input type="text" className="name" placeholder="Product Name" value={getTitle} onChange={(e) => { setTitle(e.target.value) }} />
          <select name="" id="color" onChange={(e) => setColor(e.target.value)}>
            <option value="" defaultValue>Color</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Brown">Brown</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select>
          <select name="size" id="size" >
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
        {getProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}


      </div>
    </div>
  )
}

export default Products
