// import React from 'react'
import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import {products} from "../data.js";
import Slider from "../components/slider/Slider"
import LuxuryCloset from "../assets/luxury-closet-unit.webp"
import "./home.scss"
import ProductItem from "../components/Product_Item";
const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      {/* products section */}
      <div className="products">
        {products.map(product=>(
          <ProductItem product={product} />
        ))
        }
    </div>
    {/* contact section */}
      <div className="contact">
        <div className="image" style={{backgroundImage:`url(${LuxuryCloset})`}}>
          {/* <img src={LuxuryCloset} alt="luxury closet" /> */}
        </div>
        <div className="contact-info">
          <h2>How can we assist you today?</h2>
          <p>Contact us, we'll take care of the rest.</p>
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  )
}

export default Home
