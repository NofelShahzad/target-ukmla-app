
import {  BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RouterWrapper from './views/Router'
// import RouterWrapper  from './views/Router'
// import Router from './views/Router'
import { useSelector } from 'react-redux';
import GlobalErrorBoundary from './components/errorBoundary/GlobalErrorBoundary';

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
