import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import ResetPassword from "./resetPassword/ResetPassword";
import CreateNewPassword from "./resetPassword/CreateNewPassword";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<div className="container"> <h3 className="my-4 text-center">Home</h3></div>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/new-password' element={<CreateNewPassword/>}/>
        </Route>    
)
);

export default router