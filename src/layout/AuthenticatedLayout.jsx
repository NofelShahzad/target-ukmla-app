// AuthenticatedLayout.js

import { Outlet } from "react-router-dom";
// import Navbar from "../components/navbars/homeNav/Navbar";
import SideBar from "../components/navbars/sidebar/SideBar";
import DashboardHeader from "../components/navbars/dashboardHeader/DashboardHeader";

function AuthenticatedLayout() {
  return (
    <>
      <div className="dashboard-wrapper d-flex">
        {/* <div className="sidebar-wrapper"> */}
          <SideBar />
        {/* </div> */}
        <main className="main-content dashboard-content container-fluid" style={{ 'minHeight': '100vh'}}>
          <DashboardHeader />
            <Outlet />
        </main>
      </div>
    </>
  )
}

export default AuthenticatedLayout;