import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Products from "./components/products/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
         element:<Home/>

      },
    {
     path: "/login",
    element: <Login/>
    },
     {
    path: "/register",
    element: <Register />
  },
  {
     path: "/products",
    element: <Products/>
    },
  
    ]
  }
   
  
]);
export default router;