
import {  BrowserRouter as Router, useNavigate } from 'react-router-dom'
import './App.css'
import RouterWrapper from './views/Router'
// import RouterWrapper  from './views/Router'
// import Router from './views/Router'
import { useDispatch, useSelector } from 'react-redux';
import GlobalErrorBoundary from './components/errorBoundary/GlobalErrorBoundary';
import { useGetLoggedInUserQuery } from './redux/features/auth/authApi';
import { useEffect, useState } from 'react';
import { setAuth } from './redux/features/auth/authSlice';

function App() {
  const auth =  useSelector((state) => state.auth);
  // console.log("auth::",auth)
 



  return (
    <>
      {/* <RouterProvider router={Router}/> */}
      <div className='app'>
        <GlobalErrorBoundary>
          <Router>
            <RouterWrapper />
          </Router>
        </GlobalErrorBoundary>
    </div>
    </>
  )
}

export default App
