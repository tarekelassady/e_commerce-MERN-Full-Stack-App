import "./cart.scss"
import productImg from "../assets/slider/modern-wardrobe.jpg"
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cart=useSelector(state=>state.cart);

    //Checkout
    const key=process.env.REACT_APP_STRIPE_PUBLIC_KEY
    const backendURL=process.env.REACT_APP_BACKEND_URL
    const [getStripeToken,setStripeToken]=useState(null);
    const navigate=useNavigate();
    const onToken=(token)=>{
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest=async()=>{
        try{
            const res=await axios.post(`${backendURL}/payment`,{
            tokenId:getStripeToken.id,
            amount:getStripeToken.amount
            });
            console.log(res.data);
            navigate("/pay_success",{data:res.data});
        }catch(err){
            console.log(err);
        }
        };
        getStripeToken && makeRequest();
    },[getStripeToken])

  return (
    <div className="cart">
      <h2>Your Bag</h2>
      <div className="cart-upper">
        <button>CONTINUE SHOPPING</button>
        <div className="cart-upper-text">
            <span>Shopping Bag ({cart.cartQuantity})</span>
            <span>Your Wishlist (0)</span>
        </div>
        <button className="filled">CHECKOUT</button>
      </div>
      <div className="cart-lower">
            
            <div className="cart-product-info"> {/* each cart-product-info div have one or more cart-product-detail */}
        {cart&& cart.products.map(product=>(
            <>
            <div className="cart-product-detail"  key={product._id}>
                <img src={product.imgs[0].url} alt="" />
                <div className="cart-product-desc">
                    <span><strong>Name: </strong>{product.title}</span>
                    <span><strong>ID: </strong>{product._id}</span>
                    <span className="cart-product-color"><strong>Color: </strong><div style={{backgroundColor:product.color}}></div></span>
                    <span><strong>Size: </strong>{product.size}</span>
                </div>
                <div className="cart-product-price">
                    <div className="cart-product-quantity">
                        <button className="remove-button">-</button>
                        <span className="cart-product-quantity">{product.quantity}</span>
                        <button className="add-button">+</button>
                    </div>
                    <span><strong>Unit Price: </strong>{product.price}</span>
                    <span><strong>Total Price: </strong>{product.price * product.quantity}</span>
                </div>
            </div>
            <hr /> {/* to separate one cart-product-detail from the other */}
            </>
        ))}
            
            
        </div>
        
        <div className="cart-product-summary">
            <h3>Order Summary</h3>
            <div className="cart-product-summary-detail">
                <h4>Subtotal:</h4>
                <span>$ {cart.cartTotalPrice}</span>
            </div>
            <div className="cart-product-summary-detail">
                <h4>Estimated Shipping:</h4>
                <span>$ 5.90</span>
            </div>
            <div className="cart-product-summary-detail">
                <h4>Shipping Discount</h4>
                <span>$ -5.90</span>
            </div>
            <div className="cart-product-summary-detail">
                <h4>Total</h4>
                <span>$80</span>
            </div>
            <StripeCheckout name="Patrimonio Shop" 
            image="https://patrimoniohome.com/wp-content/uploads/elementor/thumbs/logo-1-1-qcyigd9bn0z7fh10n6i8xm45gpkxcdezolyl7kunym.png"
            billingAddress
            shippingAddress
            description="Your total is $20"
            amount={cart.cartTotalPrice*100}
            token={onToken}
            stripeKey={key}>
                <button className="filled">
                    CHECKOUT
                </button>
            </StripeCheckout>
            


        </div>
        
      </div>
      
    </div>
  )
}

export default Cart
