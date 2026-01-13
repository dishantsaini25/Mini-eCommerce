import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'

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
          element: <About/>,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
            {
          path: "*",
          element: <NotFound />,
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
