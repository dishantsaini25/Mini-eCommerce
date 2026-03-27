import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ProductDetails from './components/ProductDeatils'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import Checkout from './components/Checkout'
import Success from './components/Success'


export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
  path: "/cart",
  element: <Cart />
},
{
  path: "/wishlist",
  element: <Wishlist />
},
      {
  path: "/checkout",
  element: <Checkout />
},      {
  path: "/success",
  element: <Success />
}
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
  )
}
