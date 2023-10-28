import { products } from "../data.js";
import { ShoppingCartOutlined, Search, FavoriteBorderOutlined } from '@mui/icons-material';
import HomeIcon from "@mui/icons-material/Home"
import "./product_card.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const [getWishlist, setWishlist] = useState(false);
  // console.log(product.title, product.variables[0].imgs);
  return (
    <div className="products">
      <div className="product" key={product._id}>
        {product.variables.length>0 && product.variables[0].imgs.map(img => (
          img.featured && <img src={img.url} alt={product.title} key={img.url} />
        ))}
        <div className="action-buttons">
          <AiOutlineShoppingCart style={{ fontSize: "18px" }} />
          <Link to={`/product/${product.title.replace(/\s+/g, '-').toLowerCase()}`} state={product}><AiOutlineEye style={{ fontSize: "18px" }} /></Link>
          {getWishlist ?
            <AiFillHeart style={{ fill: "red", fontSize: "18px" }} onClick={() => { setWishlist(!getWishlist) }} /> :
            <AiOutlineHeart style={{ fontSize: "18px" }} onClick={() => { setWishlist(!getWishlist) }} />
          }
        </div>
        <h3>{product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title}</h3>
      </div>
    </div>
  )
}

export default ProductCard
