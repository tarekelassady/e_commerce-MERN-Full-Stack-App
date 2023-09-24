import './App.css';
import Announcement from './components/Announcement';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Single_Product from './pages/Single_Product';
import Login from "./pages/auth/Login";
import Register from './pages/auth/Register';
import {RouterProvider,Outlet, createBrowserRouter} from "react-router-dom";

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

const router=createBrowserRouter([
  {
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products",
        element:<Products />
      },
      {
        path:"/product/:id",
        element:<Single_Product />
      }
      
      
    ]
  }
,
{
  path:"/login",
  element:<Login />
},
{
  path:"/register",
  element:<Register />
}])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}



export default App;
