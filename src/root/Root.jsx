// import React from 'react'
// import Navbar from '../components/navbars/homeNav/Navbar'
// import { Outlet } from 'react-router-dom'
// import SideBar from '../components/navbars/sidebar/SideBar'
import { useSelector } from 'react-redux';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import UnauthenticatedLayout from '../layout/UnauthenticatedLayout';

function Root() {
  // const auth = useSelector((state) => state.auth?.user);
  const isAuthenticated = useSelector((state) => state.auth.user?.authenticated);
  return (
    <>
      {/* {!auth&&
      <>
        <Navbar />
        <Outlet />
      </>
    }
    {auth &&
      <>
        <SideBar/>
      </>
    } */}

      {isAuthenticated ? <AuthenticatedLayout /> : <UnauthenticatedLayout />}
    </>
  )
}

export default Root