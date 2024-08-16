import { useEffect, useRef, useState } from "react";
import eyeIcon from '../../assets/icons/eye-icon.svg';
import eyeBoldIcon from '../../assets/icons/eye-bold-icon.svg'
import eyeHide from '../../assets/icons/eye-hide-icon.svg';
import verifiedIcon from '../../assets/icons/verified-icon.svg';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/features/auth/authSlice";
import { useLoginUserMutation, useRegisterUserMutation } from "../../redux/features/auth/authApi";


function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [submitDisable, setSubmitDisable] = useState(true);
    const [pswdErr, setPswdErr] = useState(false);
    const [submitted, setSubmitted] = useState(true);
    const [emailErr, setEmailErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const emailRef = useRef(null);
    const emailMsgRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordMsgRef = useRef(null);

    const [respData,setRespData] = useState(null);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginUser] = useLoginUserMutation();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setLoginData({ ...loginData, [name]: value });
        if (name==='email') {
            setEmailErrMsg("");
            setEmailErr(false)
        }
    }

    useEffect(() => {
        // Function to check if all fields are filled
        const isAllFieldsFilled = () => {
            for (const key in loginData) {
                if (Object.prototype.hasOwnProperty.call(loginData, key) && loginData[key] === '') {
                    return false;
                }
            }
            return true;
        };

        // Enable or disable submit button based on all fields being filled
        setSubmitDisable(!isAllFieldsFilled());
    }, [loginData]);




    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            
            const {data , error} = await loginUser(loginData);
            if (data) {
                if (data?.response!=="error") {
                    setIsVerified(true);
                    console.log("data::",data)
                    setRespData(data);
                }
                if (data?.response==="error") {
                    setEmailErrMsg("Your email is incorrect!");
                }
            }
            if (error) {
                console.log("error::",error);
            }

        } catch (err) {
            console.log("err::",err);
        }
    }

    const navigateDashboard = () => {
        navigate('/')
        dispatch(setAuth(respData))

    }


    return (
        <>
            <div className='cred-page-wrapper'>
                {!isVerified &&
                    <div className="col-sm-10 col-md-6 col-xl-5 col-xxl-4 col-10 cred-page-inner-wrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="title-wrapper">
                                <h2 className="cred-title">Log In</h2>
                            </div>
                            <div className="signup-form-wrapper">
                                <div className="col-12">
                                    <div className="field-wrapper">
                                        <label className="form-label" htmlFor="email">Email</label>
                                        <input type="email" ref={emailRef} required className={`form-control ${loginData?.email.trim() ? 'not-empty' : ''}`} defaultValue={loginData?.email} onChange={(e) => handleChangeInput(e)} name='email' id='email' placeholder="Enter email address" />
                                        <div className="err-msg">
                                            <p className={`m-0 text-danger`} ref={emailMsgRef}>{emailErrMsg}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="field-wrapper ">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <div className="password-wrapper">
                                            <input type={!showPassword ? 'password' : 'text'} ref={passwordRef} required className={`form-control ${loginData?.password.trim() ? 'not-empty' : ''}`} defaultValue={loginData?.password} onChange={(e) => handleChangeInput(e)} name='password' id='password' placeholder="Enter password" />
                                            <img src={showPassword ? eyeHide : loginData?.password.trim() ? eyeBoldIcon : eyeIcon} onClick={() => setShowPassword(prevShow => !prevShow)} alt="eye" />
                                        </div>
                                        <div className="err-msg">
                                            <p className={`opacity-0`} ref={passwordMsgRef}>Your password is incorrect!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='form-action-buttons-wrapper'>
                                <div className="col-12">
                                    <div className="forgot-password-container"><Link to='/reset-password'> Forgot Password?</Link></div>
                                    <div className="form-action-buttons-inner-wrapper">
                                        <button type='submit' disabled={submitDisable || isSubmitting}>Sign in</button>
                                        <Link to='/signup' className="btn">Register for new account</Link>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                }
                {isVerified &&
                    <div className='cred-page-inner-wrapper'>

                        <div className='account-verified-container'>
                            <img src={verifiedIcon} />
                            <h2 className='verified-title'>Successful!</h2>
                            <p>You are successfully logged in to you account.</p>
                            <div className="col-12">
                                <button to='/' onClick={()=>navigateDashboard()} className="btn btn-primary col-7">Continue</button>

                            </div>
                        </div>
                    </div>

                }

            </div>
        </>
    )
}

export default Login