import { Link } from "react-router-dom";
import {categories} from "../data.js";
import "./categories.scss"
const Categories = () => {
  return (
    <div>
        <div className="categories">
            {categories.map(category=>(
                category.id<3&&(
                <div className="category" key={category.id} style={{backgroundImage:`url(${category.img})`}}>
                    <div className="info">
                        <h3>{category.title}</h3>
                        <p className="description">adskfjeawioruaefjadsofjioaewrafjasdfoij</p>
                        
                    </div>
                    <div className="link">
                        <Link to={`/products/${category.title.toLowerCase()}`}>Shop Now</Link>
                    </div>
                    
                </div>
                )
            ))}
        </div>
        <div className="categories">
            {categories.map(category=>(
                category.id>=3&&(
                    <div className="category" key={category.id} style={{backgroundImage:`url(${category.img})`}}>
                    <div className="info">
                        <h3>{category.title}</h3>
                        <p className="description">adskfjeawioruaefjadsofjioaewrafjasdfoij</p>
                        
                    </div>
                    <div className="link">
                       <Link to={`/products/${category.title.toLowerCase()}`}>Shop Now</Link>
                    </div>
                    
                </div>
                    )
            ))}

        </div>
    </div>
  )
}

export default Categories
