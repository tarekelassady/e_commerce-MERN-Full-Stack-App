import "./single_product.scss";
import HomeOffice from "../assets/slider/white-oak-home-office.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const SingleProduct = () => {
    const colors=["black","darkgoldenrod","brown"];
    const [getColor,setColor]=useState("");
    const [getQuantity,setQuantity]=useState(1);
    const location=useLocation();
    const product=location.state;
    const [getImg,setImg]=useState(product.imgs && product.imgs.filter(img=>img.featured)[0].url);
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart);
    const handleAddToCart=()=>{
      dispatch(addProduct({...product,color:getColor,quantity:getQuantity,price:product.price}));
    }
    console.log(cart);
  return (
    <div className="single-product">
      <div className="sp-imgs">
        {product.imgs && product.imgs.map(img=>(
          img.featured && <img className="sp-featured-img" src={getImg} alt="" />
        ))}
        <div className="sp-other-imgs">
          {product.imgs && product.imgs.map(img=>(
            <img className={img.url===getImg?"sp-img-selected":"sp-img"} src={img.url} alt="" onClick={e=>setImg(e.target.src)}/>
          ))}
        </div>
      </div>
      <div className="sp-info">
        <h3>{product.title}</h3>
        <p>{product.description}
        </p>
        <h4>Price <span>{`$${product.price}`}</span></h4>
        <div className="sp-filter">
            <div className="sp-color-filter">
                <h4>Color</h4>
                {product.colors.map(color=>(
                    <div title={color} style={{backgroundColor:color}} onClick={e=>setColor(e.target.title)}>
                    </div>
                ))}
            </div>
            <div className="sp-size-filter">
                <h4>Size</h4>
                <select name="sp-size-filter" id="sp-size-filter">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
            </div>

        </div>
        
        <div className="sp-actions">
            <div className="add-remove-cart">
                <button className="remove-button" onClick={()=>{getQuantity>1&& setQuantity(getQuantity-1)}}>-</button>
                <span className="amount">{getQuantity}</span>
                <button className="add-button" onClick={()=>{setQuantity(getQuantity+1)}}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      
    </div>
  )
}

export default SingleProduct
