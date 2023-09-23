import {products} from "../data.js";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import "./product_item.scss";

const ProductItem = ({product}) => {
  return (
    <div className="products">
          <div className="product" key={product.id}>
              <img src={product.img} alt={product.title} />
              <div className="action-buttons">
                <ShoppingCartOutlinedIcon />
                <SearchIcon />
                <FavoriteBorderOutlined />
              </div>
              <h3>{product.title}</h3>
          </div>
    </div>
  )
}

export default ProductItem
