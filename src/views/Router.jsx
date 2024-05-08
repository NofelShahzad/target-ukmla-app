import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../root/Root";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import ResetPassword from "./resetPassword/ResetPassword";
import CreateNewPassword from "./resetPassword/CreateNewPassword";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<div className="container"> <h3 className="my-4 text-center">Home</h3></div>}/>
            <Route path="question-bank" element={<div className="container"> <h3 className="my-4 text-center">Question Bank</h3></div>}/>
            <Route path="big-mock" element={<div className="container"> <h3 className="my-4 text-center">Big Mock</h3></div>}/>
            <Route path="webinars" element={<div className="container"> <h3 className="my-4 text-center">Webinars</h3></div>}/>
            <Route path="contact-us" element={<div className="container"> <h3 className="my-4 text-center">Webinars</h3></div>}/>

            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Login/>} />
            <Route path='reset-password' element={<ResetPassword/>}/>
            <Route path='new-password' element={<CreateNewPassword/>}/>
            {/* <Route path="*" element={<div className="container"> <h3 className="my-4 text-center">Page not found!</h3></div>}/> */}
        </Route>    
)
);

export default router