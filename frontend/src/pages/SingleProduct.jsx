import "./single_product.scss";
import HomeOffice from "../assets/slider/white-oak-home-office.jpg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const SingleProduct = () => {
  const colors = ["black", "darkgoldenrod", "brown"];
  const [getColor, setColor] = useState("");
  const [getQuantity, setQuantity] = useState(1);
  const location = useLocation();
  const product = location.state;
  const [getProductVariable,setProductVariable]=useState(product.variables ? product.variables[0] : "null");
  const [getImg, setImg] = useState(getProductVariable.imgs.length > 0 ? getProductVariable.imgs.filter(img => img.featured)[0].url : "");
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleColorClick = (e) => {
    setColor(e.target.title);
    setProductVariable(product.variables.find(item => item.color == e.target.title));
  }
  useEffect(()=>{
    setImg(getProductVariable.imgs.length > 0 ? getProductVariable.imgs.filter(img => img.featured)[0].url : "")
    setQuantity(1);
  },[getColor])
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, color: getColor, quantity: getQuantity, price: product.price }));
  }

  return (
    <div className="single-product">
      <div className="sp-imgs">
        {getImg && <img className="sp-featured-img" key={getImg} src={getImg} alt="" />
        }
        <div className="sp-other-imgs">
          {getProductVariable && getProductVariable.imgs.map(img => (
            <img className={img.url === getImg ? "sp-img-selected" : "sp-img"} key={img.url} src={img.url} alt="" onClick={e => setImg(e.target.src)} />
          ))}
        </div>
      </div>
      <div className="sp-info">
        <h3>{product.title}</h3>
        <p>{product.description}
        </p>
        <div className="sp-variables">
          <div className="sp-colors">
            <h4>Color</h4>
            {product.variables.map(item => (
              <div className="sp-color" title={item.color} style={{ backgroundColor: item.color }} key={item.color} onClick={handleColorClick}>
              </div>
            ))}
          </div>
        <h4>Price $<span>{`${getProductVariable && getProductVariable.price}`}</span></h4>
        <h4>In Stock <span>{`${getProductVariable && getProductVariable.inStock}`}</span> pc</h4>
          
          {/* <div className="sp-size">
                <h4>Size</h4>
                <select name="sp-size-filter" id="sp-size-filter">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
            </div> */}

        </div>

        <div className="sp-actions">
          <div className="add-remove-cart">
            <button className="remove-button" onClick={() => { getQuantity > 1 && setQuantity(getQuantity - 1) }}>-</button>
            <span className="amount">{getQuantity}</span>
            <button className="add-button" onClick={() => { getQuantity < getProductVariable.inStock && setQuantity(getQuantity + 1) }}>+</button>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct
