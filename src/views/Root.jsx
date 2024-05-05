// import React from 'react'
import Navbar from '../components/navbars/homeNav/Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/navbars/sidebar/SideBar'

function Root() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <SideBar/>
    </>
  )
}

export default Root