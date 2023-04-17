import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './components/Products/Products';
import Home from './components/Layoutt/Home';
import OrderReview from './components/OrderRivew/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import cartProductsLoader from './loader/cartProductLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './provider/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Products></Products>
      },
      {
        path: '/review',
        element: <OrderReview></OrderReview>,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <ManageInventory></ManageInventory>
      },
      {
        path: '/checkout',
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
