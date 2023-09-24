import "./single_product.scss";
import HomeOffice from "../assets/slider/white-oak-home-office.jpg";
import { useState } from "react";
const Single_Product = () => {
    const colors=["black","darkgoldenrod","brown"];
    const [getAmount,setAmount]=useState(0);
  return (
    <div className="single-product">
      <div className="sp-images">
        <img src={HomeOffice} alt="" />
      </div>
      <div className="sp-info">
        <h3>Product 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugiat rem debitis modi illum perferendis commodi unde expedita eius, nemo beatae, doloremque fuga, ratione atque impedit earum! Quidem, exercitationem aperiam.
        </p>
        <h4>Price <span>$20</span></h4>
        <div className="sp-filter">
            <div className="sp-color-filter">
                <h4>Color</h4>
                {colors.map(color=>(
                    <div style={{backgroundColor:color}}>
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
                <button className="remove-button" onClick={()=>{getAmount>0&& setAmount(getAmount-1)}}>-</button>
                <span className="amount">{getAmount}</span>
                <button className="add-button" onClick={()=>{setAmount(getAmount+1)}}>+</button>
            </div>
            <button>Add to Cart</button>
        </div>
      </div>
      
    </div>
  )
}

export default Single_Product
