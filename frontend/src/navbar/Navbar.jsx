import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/Logo.png";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
  const [getIsOpened,setIsOpened]=useState(false);
  const isOpened=()=>{
    setIsOpened(!getIsOpened);
  }
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
        <img src={logo} alt="" />

      </div>
      <div className='menu'>
        <p>Login</p>
        <p>Register</p>
        <Badge badgeContent={4} color="primary">
          <Link to="/cart"><ShoppingCartOutlinedIcon /></Link>
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
    <p>About</p>
    <p>Contact</p>
  </div>
  )
}
  

export default Navbar
