// import React from 'react'
import Navbar from '../components/navbars/homeNav/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Root