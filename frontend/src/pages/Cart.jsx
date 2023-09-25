import "./cart.scss"
import productImg from "../assets/slider/modern-wardrobe.jpg"

const Cart = () => {
  return (
    <div className="cart">
      <h2>Your Bag</h2>
      <div className="cart-upper">
        <button>CONTINUE SHOPPING</button>
        <div className="cart-upper-text">
            <span>Shopping Bag (2)</span>
            <span>Your Wishlist (0)</span>
        </div>
        <button className="filled">CHECKOUT</button>
      </div>
      <div className="cart-lower">
        <div className="cart-product-info"> {/* each cart-product-info div have one or more cart-product-detail */}
            <div className="cart-product-detail">
                <img src={productImg} alt="" />
                <div className="cart-product-desc">
                    <span><strong>Name: </strong>Luxury closet</span>
                    <span><strong>ID: </strong>338822300</span>
                    <span className="cart-product-color"><strong>Color: </strong><div ></div></span>
                    <span><strong>Size: </strong>L</span>
                </div>
                <div className="cart-product-price">
                    <div className="cart-product-amount">
                        <button className="remove-button">-</button>
                        <span className="cart-product-amount">1</span>
                        <button className="add-button">+</button>
                    </div>
                    <span><strong>Unit Price: </strong>$ 100</span>
                    <span><strong>Total Price: </strong>$ 100</span>
                </div>
                
            </div>
            
            <hr /> {/* to separate one cart-product-detail from the other */}
        </div>
        
        <div className="cart-product-summary">
            <h3>Order Summary</h3>
            <div className="cart-product-summary-detail">
                <h4>Subtotal:</h4>
                <span>$ 80</span>
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
            <button>CHECKOUT</button>
            


        </div>
        
      </div>
      
    </div>
  )
}

export default Cart
