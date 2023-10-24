import { useState } from "react";
import Sidebar from "./Sidebar";
import "./dashboard.scss";
import AddProduct from "./pages/AddProduct";
import { useLocation } from "react-router-dom";
import Products from "./pages/Products";

const Dashboard = () => {
    const [getActive,setActive]=useState("Home");

    const contents={
        Products:<Products />,
        Stats:"Stats",
        Sales:"Sales",
        
    }
  return (
    <div className="container">
        <Sidebar getActive={getActive} setActive={setActive}/>
        <div className="content-section">
            {contents[getActive]}
        </div>
    </div>
  )
}

export default Dashboard
