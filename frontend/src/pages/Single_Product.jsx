import "./single_product.scss";
import HomeOffice from "../assets/slider/white-oak-home-office.jpg";
const Single_Product = () => {
  return (
    <div className="single-product">
      <div className="single-product-images">
        <img src={HomeOffice} alt="" />
      </div>
      <div className="single-product-info">
        <h3>Product 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugiat rem debitis modi illum perferendis commodi unde expedita eius, nemo beatae, doloremque fuga, ratione atque impedit earum! Quidem, exercitationem aperiam.
        </p>
        <p>$20</p>
      </div>
    </div>
  )
}

export default Single_Product
