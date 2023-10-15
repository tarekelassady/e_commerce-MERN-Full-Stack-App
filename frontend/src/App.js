import './App.css';
import Announcement from './components/Announcement';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Login from "./pages/auth/Login";
import Register from './pages/auth/Register';
import {RouterProvider,Outlet, createBrowserRouter,NavLink,Navigate} from "react-router-dom";
import PaySuccess from './pages/PaySuccess';
import Pay from "./pages/Pay";
import AddProduct from './pages/AddProduct';


function App() {
const Layout=()=>{

  return(
    <>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
    
}
const user=false;
const router=createBrowserRouter([
  {
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/add-product",
        element:<AddProduct />
      },
      {
        path:"/products",
        element:<Products />
      },
      {
        path:"/products/:category",
        element:<Products />
      },
      {
        path:"/product/:id",
        element:<SingleProduct />
      },
      {
        path:"/cart",
        element:<Cart />
      }
      
      
    ]
  }
,
{
  path:"/login",
  element:user?<Navigate to="/" replace />:<Login />
},
{
  path:"/register",
  element:user?<Navigate to="/" replace />:<Register />
},
{
  path:"/pay",
  element:<Pay />
},
{
  path:"/pay_success",
  element:<PaySuccess />
}])



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}



export default App;
