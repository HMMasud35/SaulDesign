import React, { Component } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Mywork from './components/Mywork'
import Projectmind from './components/Projectmind'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Rootlayout from './Layout/Rootlayout'
import Home from './Pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      }, 
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/MyWork",
        Component: Mywork,
      },
      {
        path: "/Projectmind",
        Component: Projectmind,
      },
    ]
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
