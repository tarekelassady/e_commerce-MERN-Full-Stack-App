import './navbar.scss'
import logo from "../assets/Logo.png";
import Badge from '@mui/material/Badge';
// import {Search,ShoppingCartOutlined,Menu,Close} from '@mui/icons-material';
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth';
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu, AiOutlineClose, AiOutlineHeart } from "react-icons/ai"


const Navbar = () => {
  const [getIsOpened, setIsOpened] = useState(false);
  const [getIsSticky, setIsSticky] = useState(false);
  const [getActiveMenuItem, setActiveMenuItem] = useState(0);
  const [getShowSearch, setShowSearch] = useState(false);

  const isOpened = () => {
    setIsOpened(!getIsOpened);
  }
  const location = useLocation();
  const currentUser = useSelector(state => state.user.currentUser);
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const wishlistQuantity = useSelector(state => state.wishlist.wishlistQuantity);
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    // dispatch(addProduct({...product,color:getColor,quantity:getQuantity,price:product.price}));
  }
  const handleAddToCart = () => {
    // dispatch(addProduct({...product,color:getColor,quantity:getQuantity,price:product.price}));
  }


  const handleLogout = (e) => {
    e.preventDefault();
    try {
      logout(dispatch);
    } catch (err) {
      console.log(err);
    }

  }

  // window.addEventListener("scroll",()=>{
  //   if(window.scrollY>70){
  //     setIsSticky(true);
  //   }else{
  //     setIsSticky(false);
  //   }
  // })
  return (
    <>
      <div className='navbar_container' style={{ position: getIsSticky ? "fixed" : "", top: 0 }}>
        <div className='logo'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className='menu'>
          {currentUser ?
            <>
              <Link className="auth" to="/profile">{currentUser.username}</Link>
              <p className="auth" onClick={handleLogout}>Logout</p>
            </>
            :
            <>
              <Link className="auth" to="/login" state={location}>Login</Link>
              <Link className="auth" to="/register">Register</Link>
            </>
          }
          <p className='language'>EN</p>
          <AiOutlineSearch style={{ color: 'var(--text-color)', fontSize: "24px", cursor: "pointer" }} onClick={() => setShowSearch(!getShowSearch)} />
          <Badge className="wishlist-icon" badgeContent={wishlistQuantity} sx={{ "& .MuiBadge-badge": { backgroundColor: 'var(--second-color)' } }} color="primary">
            <Link to="/"><AiOutlineHeart style={{ color: 'var(--text-color)', fontSize: "24px" }} /></Link>
          </Badge>
          <Badge className="cart-icon" badgeContent={cartQuantity} sx={{ "& .MuiBadge-badge": { backgroundColor: 'var(--second-color)' } }} color="primary">
            <Link to="/cart"><AiOutlineShoppingCart style={{ color: 'var(--text-color)', fontSize: "24px" }} /></Link>
          </Badge>
          <button className='btn-dropdown-menu' onClick={isOpened}>{getIsOpened ? <AiOutlineClose style={{ color: 'var(--text-color)', fontSize: "24px" }}/> : <AiOutlineMenu style={{ color: 'var(--text-color)', fontSize: "24px" }} />}</button>
          <DropDownMenu opened={getIsOpened} setIsOpened={setIsOpened} setActiveMenuItem={setActiveMenuItem} getActiveMenuItem={getActiveMenuItem} />
        </div>
      </div>
      {
        getShowSearch ?
          <div className='search'>
            <div className='search-input'>
              <input type="text" />
              <AiOutlineSearch style={{ color: "var(--text-color)", fontSize: "16px" }} />
            </div>
          </div> :
          <></>
      }
    </>
  )

}
const DropDownMenu = ({ opened, setIsOpened, setActiveMenuItem, getActiveMenuItem }) => {
  console.log(getActiveMenuItem)
  return (
    <div className={opened ? "visible-dropdownmenu" : "hidden-dropdownmenu"}>
      <Link to="/products" className={getActiveMenuItem === 1 ? "active-menu-item" : "inactive-menu-item"} onClick={() => { setActiveMenuItem(1); setIsOpened(false); }}>Products</Link>
      <Link to="/add-product" className={getActiveMenuItem === 2 ? "active-menu-item" : "inactive-menu-item"} onClick={() => { setActiveMenuItem(2); setIsOpened(false); }}>Add Product</Link>
      <Link to="/" className={getActiveMenuItem === 3 ? "active-menu-item" : "inactive-menu-item"} onClick={() => { setActiveMenuItem(3); setIsOpened(false); }}>About</Link>
      <Link to="/" className={getActiveMenuItem === 4 ? "active-menu-item" : "inactive-menu-item"} onClick={() => { setActiveMenuItem(4); setIsOpened(false); }}>Contact</Link>
    </div>
  )
}


export default Navbar
