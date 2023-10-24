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
import { RouterProvider, Outlet, createBrowserRouter, NavLink, Navigate } from "react-router-dom";
import PaySuccess from './pages/PaySuccess';
import Pay from "./pages/Pay";
import AddProduct from './dashboard/pages/AddProduct';
import { useSelector } from 'react-redux';
import Dashboard from './dashboard/Dashboard';
import UserVerificaion from './pages/auth/UserVerificaion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const Layout = () => {

    return (
      <>
        <Announcement />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )

  }
  const currentUser = useSelector(state => state.user.currentUser);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/add-product",
          element: <AddProduct />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/products/:category",
          element: <Products />
        },
        {
          path: "/product/:id",
          element: <SingleProduct />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        }


      ]
    }
    ,
    {
      path: "/login",
      element: currentUser ? <Navigate to="/" replace /> : <Login />
    },
    {
      path: "/register",
      element: currentUser ? <Navigate to="/" replace /> : <Register />
    },
    {
      path: "/activation/:activationToken",
      element: <UserVerificaion />
    },
    {
      path: "/pay",
      element: <Pay />
    },
    {
      path: "/pay_success",
      element: <PaySuccess />
    },
  ])



  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}



export default App;
