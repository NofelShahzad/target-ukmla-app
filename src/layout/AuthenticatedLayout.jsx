// AuthenticatedLayout.js

import { Outlet } from "react-router-dom";
// import Navbar from "../components/navbars/homeNav/Navbar";
import SideBar from "../components/navbars/sidebar/SideBar";
import DashboardHeader from "../components/navbars/dashboardHeader/DashboardHeader";
import { useCallback, useEffect, useState } from "react";

function AuthenticatedLayout() {

  const [sidebar, setSidebar] = useState(false);

  const toogleSideBar = () => {
    setSidebar(prev => !prev);
    }
    const handleResize = useCallback(() => {
      if (window.innerWidth < 1100) {
       setSidebar(true);
    }
    },[])
    const debouncedHandleResize = useCallback(
      () => {
        const timeoutId = setTimeout(() => {
          handleResize();
        }, 250); // Delay execution by 250 milliseconds
  
        return () => clearTimeout(timeoutId); // Clear timeout if handleResize is called again within the delay
      },
      [handleResize]
    );
  
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", debouncedHandleResize);
      return () => window.removeEventListener('resize', debouncedHandleResize);
    })

  return (
    <>
      {/* <div className="dashboard-wrapper d-flex"> */}
        {/* <div className="sidebar-wrapper"> */}
          <SideBar toogleSideBar={toogleSideBar} sidebar={sidebar} />
        {/* </div> */}
        <main className="dashboard-wrapper">
          <DashboardHeader />
          <Outlet />
        </main>
      {/* </div> */}
    </>
  )
}

export default AuthenticatedLayout;