// AuthenticatedLayout.js

import { Outlet } from "react-router-dom";
// import Navbar from "../components/navbars/homeNav/Navbar";
import SideBar from "../components/navbars/sidebar/SideBar";

function AuthenticatedLayout() {
  return (
    <>
      <SideBar />
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
}

export default AuthenticatedLayout;