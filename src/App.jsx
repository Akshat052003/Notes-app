import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Paste'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter (
  [
    {
      path : '/' ,
      element : 
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path : '/pastes' ,
      element : 
      <div>
        <Navbar />
        <Pastes />
      </div>
    },
    {
      path : '/pastes/:id' ,
      element : 
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    },

  ]
)


function App() {

  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App