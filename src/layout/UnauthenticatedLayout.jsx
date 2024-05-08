// UnauthenticatedLayout.js
import Navbar from '../components/navbars/homeNav/Navbar';
import { Outlet } from 'react-router-dom';

function UnauthenticatedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default UnauthenticatedLayout;