
import {  RouterProvider } from 'react-router-dom'
import './App.css'
// import Navbar from './components/navbars/homeNav/Navbar'
import router from './views/Router'
// import Root from './views/Root'
// import Signup from './views/signup/Signup'
// import Login from './views/login/Login'
// import CreateNewPassword from './views/resetPassword/CreateNewPassword'
// import ResetPassword from './views/resetPassword/ResetPassword'
// import Signup from './views/signup/Signup'
// import TryAgain from './views/tryAgain/TryAgain'
// import Signup from './views/signup/Signup'

function App() {

  return (
    <>
    <div className='app'>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <ResetPassword/> */}
      {/* <CreateNewPassword/> */}
      {/* <TryAgain/> */}
      <RouterProvider router={router}/>
      {/* <Routes>
        <Route to="/" index element={<Root/>}>
              <Route to="/signup" element={<Signup/>}/>
              <Route to="/login" element={<Login/>}/>
          </Route>
      </Routes> */}
    </div>
    </>
  )
}

export default App
