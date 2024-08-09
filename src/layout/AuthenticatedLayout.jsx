// AuthenticatedLayout.js

import { Outlet } from "react-router-dom";
// import Navbar from "../components/navbars/homeNav/Navbar";
import SideBar from "../components/navbars/sidebar/SideBar";
import DashboardHeader from "../components/navbars/dashboardHeader/DashboardHeader";
import { useState } from "react";

function AuthenticatedLayout() {

  const [sidebar, setSidebar] = useState(false);

  const toogleSideBar = () => {
    setSidebar(prev => !prev);
    }

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