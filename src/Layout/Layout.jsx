import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <>
     <div className="min-h-screen flex flex-col bg-[#FAF9F6]">

        <Navbar/>
        <main  className='flex-1 pt-25'>
            <Outlet/>
        </main>
        <Footer/>
     </div>
      
    </>
  )
}

export default Layout
