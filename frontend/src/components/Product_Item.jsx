import {products} from "../data.js";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import "./product_item.scss";
import { Link } from "react-router-dom";

const ProductItem = ({product}) => {
  return (
    <div className="products">
          <div className="product" key={product._id}>
            {product.imgs&& product.imgs.map(img=>(
              img.featured && <img src={img.url} alt={product.title} />
            ))}
              <div className="action-buttons">
                <ShoppingCartOutlinedIcon />
                <Link to={`/product/${product.title.replace(/\s+/g, '-').toLowerCase()}`} state={product}><SearchIcon /></Link>
                <FavoriteBorderOutlined />
              </div>
              <h3>{product.title}</h3>
          </div>
    </div>
  )
}

export default ProductItem
