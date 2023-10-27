import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {colors} from "../../colors/colors.js"
import {AiOutlineSave, AiOutlineClose} from "react-icons/ai";
import "./add_product.scss"


const ProductVariables = ({ id, getProductVariables, setProductVariables }) => {
    const [getColor, setColor] = useState("");
    const [getImages, setImages] = useState([]);
    const [getFeatured, setFeatured] = useState([]);
    const [getPrice, setPrice] = useState(0);
    const [getInStock, setInStock] = useState(0);
    const [getVariables, setVariables] = useState(null);
    const [getIsSaved,setIsSaved]=useState(true);

    const handleUploadImage = (e) => {
        setImages(prev => [...prev, ...e.target.files]);
    }
    const deleteImage = (e) => {
        setImages(prev => prev.filter((image, i) => i != e.target.id));
    }
    useEffect(() => {
        setFeatured(getImages.map((image, i) => (getFeatured[i] = false)));
    }, [getImages]);


    const handleFeatured = (e) => {
        setFeatured(getImages.map((image, i) => i == e.target.id ? true : false));
    }
    const handleColor = (e) => {
        const isColorFound = getProductVariables.some(item => item.color == e.target.value ? true : false);
        if (isColorFound) {
            toast.error(`Color ${e.target.value} is already exist, please select another color`);
        } else {
            setColor(e.target.value);
        }
    }
    const updateVariables = () => {
        setVariables(({
            id: id,
            color: getColor,
            imgs: getImages.map((img, i) => ({ url: URL.createObjectURL(img), featured: getFeatured[i] })),
            price: getPrice,
            inStock: getInStock
        }))

    }


    useEffect(() => {
        setIsSaved(false);
        updateVariables();
    }, [getColor, getFeatured, getPrice, getInStock]);


    const numbersOnly = (e) => {
        const keyCode = e.keyCode || e.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!new RegExp("[0-9]").test(keyValue)) e.preventDefault();
        return;
    };
    
  const deleteProductVariable = (e) => {
    setProductVariables(getProductVariables.filter(variable => variable.id != e.target.id));
  }
    const saveVariables = () => {
        setProductVariables(getProductVariables.map((variable) => variable.id == id ? getVariables : variable));
        setIsSaved(true);
    }
    
    useEffect(()=>{
        console.log(getIsSaved)
    },[getIsSaved])
    return (
        <div className="product-variable-container">
            <AiOutlineSave className={!getIsSaved?"btn-save":"btn-saved"} onClick={saveVariables} disabled={!getColor || getPrice == 0 || getInStock == 0 || !getIsSaved} />
            <AiOutlineClose className='btn-delete' id={id} onClick={deleteProductVariable} />
            <label htmlFor="">Product Variables</label>
            <div className='product-info'>
                <div className="colors">
                    <div className="preview-color" style={{ background: getColor, width: "24px", height: "24px" }} />
                    <select className="select-color" defaultValue="?" value={getColor} onChange={handleColor}>
                        <option value="?" disabled>Color</option>
                        {colors.map(color => (
                            <option value={color} key={color} style={{background:color}}>{color}</option>
                        ))}
                    </select>
                </div>
                <input type="text" value={getPrice} placeholder="Price" onChange={(e) => setPrice(e.target.value)} onKeyPress={numbersOnly} />
                <input type="text" value={getInStock} placeholder="In Stock (pc)" onChange={(e) => setInStock(e.target.value)} onKeyPress={numbersOnly} />

            </div>
            <div className='upload-images'>
                <label htmlFor="upload-images">Upload Images</label>
                <input type="file" multiple id="upload-images" accept=".jpg,.webp" onChange={handleUploadImage} />
            </div>
            <div className="preview-images">
                {getVariables && getVariables.imgs.map((image, i) => (
                    <div className="preview-image" key={image.url}>
                        <img src={image.url} id={i} />
                        <div className="select-featured-image">
                            <input type="radio" id={i} checked={getFeatured[i]} onChange={handleFeatured} />
                            <label htmlFor={i}> Featured</label>
                        </div>
                        <AiOutlineClose className="btn-delete" id={i} onClick={deleteImage} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductVariables
