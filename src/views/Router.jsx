import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import Signup from "./signup/Signup";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route path='/signup' element={<Signup/>}/>
        </Route>    
)
);

export default router