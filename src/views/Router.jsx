// Router.js
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Root from '../root/Root';
import Signup from './auth/Signup';
import Login from './auth/Login';
import ResetPassword from './auth/ResetPassword';
import CreateNewPassword from './auth/CreateNewPassword';
import ProtectedRoute from './auth/ProtectedRoute';
import Dashboard from './dashboard/Dashboard';
import { useSelector } from 'react-redux';
// import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import UnauthenticatedLayout from '../layout/UnauthenticatedLayout';
import QuestionsBank from './dashboard/QuestionsBank';
import BigMocks from './dashboard/BigMocks';
import BigMock from './frontSite/BigMock';
import Webinars from './dashboard/Webinars';
import ContactUs from './dashboard/ContactUs'
import BigmockDetail from './dashboard/BigmockDetail';
import AllComments from './dashboard/AllComments';
import FlaggedQuestion from './dashboard/FlaggedQuestion';

const RouterWrapper = () => {
    const isUserAuthenticated = useSelector(state => !!state.auth.user);

    return (
        <Routes>

            <Route path='/' element={
                <ProtectedRoute isAllowed={!isUserAuthenticated} redirectedPath="/dashboard">
                    <UnauthenticatedLayout />
                </ProtectedRoute>
            }>
                <Route index element={<div className="container"> <h3 className="my-4 text-center">Home</h3></div>} />

                <Route path="signup" element={<Signup />} />
                {/* <Route path="login" element={<Login />} /> */}
                <Route
                    path="/login"
                    element={
                        <ProtectedRoute isAllowed={!isUserAuthenticated} redirectedPath="/dashboard">
                            <Login />
                        </ProtectedRoute>
                    }
                />
                <Route path="question-bank" element={<div className="container"> <h3 className="my-4 text-center">Question Bank</h3></div>} />
                <Route path="big-mock" element={<BigMock/>} />
                <Route path="webinar" element={<div className="container"> <h3 className="my-4 text-center">Webinars</h3></div>} />
                <Route path="contact-us" element={<div className="container"> <h3 className="my-4 text-center">Webinars</h3></div>} />

                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="new-password" element={<CreateNewPassword />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route
                path="/dashboard"
                element={
                    <ProtectedRoute isAllowed={!!isUserAuthenticated} redirectedPath="/">
                        <AuthenticatedLayout />
                    </ProtectedRoute>
                }
            > */}
                {/* <Route index element={<Dashboard />} /> */}
                <Route path="questions-bank" >
                    <Route index element={<QuestionsBank/>} />
                    <Route path='comments' element={<AllComments/>}/>
                    <Route path='flagged-questions' element={<FlaggedQuestion/>}/>
                </Route>
                <Route path="big-mocks"  >
                    <Route index element={<BigMocks/>}/>
                    <Route path='detail/:id' element={<BigmockDetail/>}/>
                </Route>
                <Route path="webinars" element={<Webinars/>} />
                <Route path="contactus" element={<ContactUs/>} />


            {/* </Route> */}
        </Routes>
    );
};

export default RouterWrapper;
