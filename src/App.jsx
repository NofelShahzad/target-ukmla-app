
import {  RouterProvider } from 'react-router-dom'
import './App.css'
import router from './views/Router'
// import { useSelector } from 'react-redux';

function App() {
  // const auth =  useSelector((state) => state.auth);
  // console.log("auth::",auth)
  

  return (
    <>
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
