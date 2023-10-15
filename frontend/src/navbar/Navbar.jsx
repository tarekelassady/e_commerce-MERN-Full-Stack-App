import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/Logo.png";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [getIsOpened,setIsOpened]=useState(false);
  const isOpened=()=>{
    setIsOpened(!getIsOpened);
  }
  const username=useSelector(state=>state.user.username);
  const cartQuantity=useSelector(state=>state.cart.cartQuantity);
  
  return (
    <div className='navbar_container'>
      <div className='tools'>
        <p className='language'>EN</p>
        <div className='search'>
          <input type="text" />
          <SearchIcon style={{color:"grey",fontSize:"16px"}} />
        </div>
      </div>
      <div className='logo'>
        <Link to="/"><img src={logo} alt="" /></Link>

      </div>
      <div className='menu'>
        {username?<Link to="">{username}</Link>:
        <>
          <Link className="auth" to="/login">Login</Link>
          <Link className="auth" to="/register">Register</Link>
        </>
        }
        <Badge className="cart-icon" badgeContent={cartQuantity} sx={{"& .MuiBadge-badge": {backgroundColor: 'var(--second-color)'}}} color="primary">
          <Link to="/cart"><ShoppingCartOutlinedIcon style={{color:'var(--first-color)'}} /></Link>
        </Badge>
        <button className='menu-btn' onClick={isOpened}>{getIsOpened?
        <CloseIcon />:<MenuIcon />}</button>
        <Menu opened={getIsOpened}/>
      </div>
    </div>
  )
  
}
const Menu=({opened})=>{
  return(
  <div className={opened?"visible-dropdownmenu":"hidden-dropdownmenu"}>
    <p><Link to="/products">Products</Link></p>
    <p><Link to="/add-product">Add Product</Link></p>
    <p>About</p>
    <p>Contact</p>
  </div>
  )
}
  

export default Navbar
