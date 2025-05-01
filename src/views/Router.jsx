// Router.js
// import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Root from '../root/Root';
import Signup from './auth/Signup';
import Login from './auth/Login';
// import ResetPassword from './auth/ResetPassword';
import CreateNewPassword from './auth/CreateNewPassword';
import ProtectedRoute from './auth/ProtectedRoute';
import Dashboard from './dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
// import AuthenticatedLayout from '../layout/AuthenticatedLayout';
// import BigMock from './frontSite/BigMock';
import UnauthenticatedLayout from '../layout/UnauthenticatedLayout';
import QuestionsBank from './dashboard/QuestionsBank';
import BigMocks from './dashboard/BigMocks';
import Webinars from './dashboard/Webinars';
import ContactUs from './dashboard/ContactUs'
import BigmockDetail from './dashboard/BigmockDetail';
import AllComments from './dashboard/AllComments';
import FlaggedQuestion from './dashboard/FlaggedQuestion';
import FlaggedGuides from './dashboard/FlaggedGuides';
import Questionnaire from './dashboard/questionnaire/Questionnaire';
import AuthenticatedLayout from '../layout/AuthenticatedLayout';
import ResetPassword from './auth/ResetPassword';
import { useEffect, useState } from 'react';
import { setAuth } from '../redux/features/auth/authSlice';
import { useGetLoggedInUserQuery } from '../redux/features/auth/authApi';
import PracticeMocks from './dashboard/practice-mocks/PracticeMocks';
import BigMock from './frontSite/BigMock';
import Contactus from './frontSite/contactus/Contactus';
import Home from './frontSite/home/Home';
import QuestionBank from './frontSite/questionBank/QuestionBank';
import Webinar from './frontSite/webinar/Webinar';
import PracticeDetail from './dashboard/practice-mocks/PracticeDetail';
import AllNotifications from './dashboard/notification/AllNotifications';
import NotificationDetail from './dashboard/notification/NotificationDetail';
import MockLog from './dashboard/mock-log/MockLog';
import PaymentSuccess from './paymentSuccess/PaymentSuccess';
import PaymentFailure from './paymentFailure/PaymentFailure';
import ChangePassword from './dashboard/ChangePassword';
import Gems from './dashboard/gems/Gems';
import AboutUs from './dashboard/AboutUs';
import Gem from './frontSite/gems/Gem';

const RouterWrapper = () => {
    const isUserAuthenticated = useSelector(state => !!state.auth.user);

    const { data, isLoading, error } = useGetLoggedInUserQuery();

  const [getuserisLoading, setGetuserisLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  

  useEffect(() => {
    try {
      // setGetuserisLoading(isLoading);
      if (data) {
        // console.log("data::",data);
        if (data?.status) {
            // console.log(data)
          dispatch(setAuth(data))
        }
        // dispatch(setCredentials({...data,access_token: auth?.accessToken}));
        setTimeout(() => {
          setGetuserisLoading(false);
        }, 3000);
      }
      if (error) {
        // console.log("error::",error);
        // console.log(error);
        // dispatch(logOut());
          setTimeout(() => {
            setGetuserisLoading(true);
          }, 4000);
          
        
        // dispatch(logOut());
        // navigate(`/login`);
        // navigate(`/${app_routes.signin}`);
        // if (!['/login', '/reset-password', '/new-password','/signup'].includes(location.pathname)) {
        //   navigate('/');
        // }
      }
      
    } catch (err) {
      console.log("err",err)
    }
    finally{
      setTimeout(() => {
        setGetuserisLoading(false);
      }, 4000);
    }
  }, [data,error,isLoading]);

    return (
        // <Routes>

        //     <Route path='/' element={
        //         <ProtectedRoute isAllowed={!isUserAuthenticated} redirectedPath="/">
        //             <UnauthenticatedLayout />
        //         </ProtectedRoute>
        //     }>
        //         {/* <Route index element={<div className="container"> <h3 className="my-4 text-center">Home</h3></div>} /> */}

        //         <Route path="signup" element={<Signup />} />
        //         {/* <Route path="login" element={<Login />} /> */}
        //         <Route
        //             path="/login" 
        //             element={
        //                 <ProtectedRoute isAllowed={!isUserAuthenticated} redirectedPath="/">
        //                     <Login />
        //                 </ProtectedRoute>
        //             }
        //         />
        //         <Route path="/home" element={ <ProtectedRoute isAllowed={!isUserAuthenticated} redirectedPath="/"><Home/></ProtectedRoute>} />
        //         <Route path="question-bank" element={<QuestionBank/>} />
        //         <Route path="mocks" element={<BigMock/>} />
        //         <Route path="webinar" element={<Webinar/>} />
        //         <Route path="contact-us" element={<Contactus/>} />

        //         <Route path="reset-password" element={<ResetPassword title={"Forget Password"}/>} />
        //         <Route path="new-password" element={<CreateNewPassword />} />
        //     </Route>
        //     <Route path="payment-success" element={<PaymentSuccess/>}/>
        //     <Route path="payment-error" element={<PaymentFailure/>}/>
        //     {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        //     <Route
        //         path="/"
        //         element={
        //             <ProtectedRoute isAllowed={!!isUserAuthenticated} redirectedPath="/login">
        //                 <AuthenticatedLayout />
        //             </ProtectedRoute>
        //         }
        //     >
        //             <Route index element={<QuestionsBank/>} />
        //         <Route path="questions-bank">
        //           <Route index element={<Dashboard />} />
        //           <Route path='comments' element={<AllComments/>}/>
        //           <Route path='flagged-questions' element={<FlaggedQuestion/>}/>
        //           <Route path='flagged-guides' element={<FlaggedGuides/>}/>
        //         </Route>
        //         <Route path="big-mocks">
        //             <Route index element={<BigMocks/>}/>
        //             <Route path='detail/:mock_id' element={<BigmockDetail/>}/>
        //             <Route path='log/:mock_id' element={<MockLog/>}/>
        //         </Route>
        //         <Route path='practice-mocks'>
        //           <Route index element={<PracticeMocks/>}/>
        //           <Route path='detail/:practice_id' element={<PracticeDetail/>}/>
        //           <Route path='log/:mock_id' element={<MockLog/>}/>
        //         </Route>
        //         <Route path="webinars" element={<Webinars/>} />
        //         <Route path="contactus" element={<ContactUs/>} />
        //         <Route path=':questionnaire_Id/:question_Id' element={<Questionnaire isMock={false} type={"category"}/>}/>
        //         {/* <Route path=':questionnaire_Id' element={<Questionnaire isMock={false}/>}/> */}
        //         <Route path='/mock/:mock_id/:question_Id' element={<Questionnaire isMock={true} type={"mock"}/>}/>
        //         <Route path='/practice/:practice_id/:question_Id' element={<Questionnaire isMock={true} type={"practice"}/>}/>
        //         <Route path='/notifications' element={<AllNotifications/>} />
        //         <Route path='/notifications/:notification_id' element={<NotificationDetail/>} />

        //     </Route>
        // </Routes>
    
      
<Routes>
    {/* Unauthenticated Routes (including Home) */}
    <Route
        element={
          <ProtectedRoute isAllowed={!isUserAuthenticated} redirectedPath="/dashboard">
                <UnauthenticatedLayout />
            </ProtectedRoute>
        }
    >
        <Route path="/" element={
          <ProtectedRoute isAllowed={!isUserAuthenticated} redirectedPath="/">
            <Home />
                    {/* <Login /> */}
                </ProtectedRoute>
          } />
        <Route path="signup" element={<Signup />} />
        <Route
            path="login"
            element={
                <ProtectedRoute isAllowed={!isUserAuthenticated} redirectedPath="/">
                    <Login />
                </ProtectedRoute>
            }
        />
        <Route path="question-bank" element={<QuestionBank />} />
        <Route path="mocks" element={<BigMock />} />
        <Route path="webinar" element={<Webinar />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="gem" element={<Gem/>}/>
        <Route path="reset-password" element={<ResetPassword title={"Forget Password"} />} />
        <Route path="new-password" element={<CreateNewPassword />} />
    </Route>

    {/* Payment Routes (Accessible without login) */}
    <Route path="payment-success" element={<PaymentSuccess />} />
    <Route path="payment-error" element={<PaymentFailure />} />

    {/* Authenticated Routes */}
    <Route
        element={
            <ProtectedRoute isAllowed={!!isUserAuthenticated} redirectedPath="/">
                <AuthenticatedLayout />
            </ProtectedRoute>
        }
    >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="account" element={<ChangePassword/>}/>
        <Route path="questions-bank">
            <Route index element={<QuestionsBank />} />
            <Route path="comments" element={<AllComments />} />
            <Route path="flagged-questions" element={<FlaggedQuestion />} />
            <Route path="flagged-guides" element={<FlaggedGuides />} />
        </Route>
            <Route path="/gems" element={<Gems />} />

        <Route path="big-mocks">
            <Route index element={<BigMocks />} />
            <Route path="detail/:mock_id" element={<BigmockDetail />} />
            <Route path="log/:mock_id" element={<MockLog />} />
        </Route>

        <Route path="practice-mocks">
            <Route index element={<PracticeMocks />} />
            <Route path="detail/:practice_id" element={<PracticeDetail />} />
            <Route path="log/:mock_id" element={<MockLog />} />
        </Route> 
        
        <Route path="webinars" element={<Webinars />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path=":questionnaire_Id/:question_Id" element={<Questionnaire isMock={false} type={"category"} />} />
        <Route path="/mock/:mock_id/:question_Id" element={<Questionnaire isMock={true} type={"mock"} />} />
        <Route path="/practice/:practice_id/:question_Id" element={<Questionnaire isMock={true} type={"practice"} />} />
        <Route path="/notifications" element={<AllNotifications />} />
        <Route path="/notifications/:notification_id" element={<NotificationDetail />} />
    </Route>
</Routes>
    
      );
};

export default RouterWrapper;
