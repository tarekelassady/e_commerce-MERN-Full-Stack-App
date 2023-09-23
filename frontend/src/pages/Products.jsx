import "./products.scss";
import { products } from "../data";
import ProductItem from "../components/Product_Item";
const Products = () => {
  return (
    <div>
      <div className="filter-sort-section">
        <div className="filter-products">
          <h2>Filter Products</h2>
          <input type="text" className="name" placeholder="Product Name" />
          <select name="" id="color">
            <option value="" disabled selected>Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <select name="size" id="size">
            <option value="" disabled selected>Size</option>
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
            <option value="" disabled selected>Price</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>
      </div>
      <div className="products">
        {products.map(product=>(
          <ProductItem product={product}/>
        ))}
        

      </div>
    </div>
  )
}

export default Products
