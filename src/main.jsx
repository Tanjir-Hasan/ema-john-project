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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
