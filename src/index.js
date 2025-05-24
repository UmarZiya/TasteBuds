import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import {useState,useEffect,useContext} from "react";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from"./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from './components/Cart'
import "./index.css";
import CartContext from "./utilities/CartContext";





const AppLayout = () => {
  const [login,setlogin]=useState("")
  const [cartItems,setcartItems]=useState([])
  
  return (
   
      
      <CartContext.Provider value={{cartItems,setcartItems}}>
      <Header />      
      <Outlet />
       </CartContext.Provider>

 
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />,
        
      },
  {
    path:"/about",
    element:<About />,
    
    },
  {
    path:"/contact",
    element:<Contact />
  },
  {
    path:"/cart",
    element: <Cart />
  },
  {
    path:"/restaurant/:resId",
    element:<RestaurantMenu />
  },
  

  
],
errorElement:<Error />,
},
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
