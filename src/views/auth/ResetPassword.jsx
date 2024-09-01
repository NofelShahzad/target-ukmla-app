import { useEffect, useRef, useState } from "react";
// import verifiedIcon from '../../assets/icons/verified-icon.svg';
import { useAddNewPasswordMutation, useForgetPasswordRequestMutation, useForgetPasswordVerifyPinMutation } from "../../redux/features/auth/authApi";
import CreateNewPassword from "./CreateNewPassword";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../../components/loaders/ButtonLoader";
import { errorMessage } from "../../components/toastMessages/ToastifyMsg";

function ResetPassword({title}) {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const emailRef = useRef(null);
    const emailMsgRef = useRef(null);
    const [emailErrMsg,setEmailErrMsg] = useState("");
    const [emailErr,setEmailErr] = useState(false);

    const [otpErr,setOtpErr] = useState(false);
    const [otpErrMsg,setOtpErrMsg] = useState("");
    const otpRef = useRef(null);
    const otpMsgRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitDisable, setSubmitDisable] = useState(true);
    const [isVerified,setIsVerified] = useState(false);
    const [otp,setOtp] = useState("");
    const [verifyOtp,setVerifyOtp] = useState(false);
    const [forgetPasswordRequest] =  useForgetPasswordRequestMutation();
    const [forgetPasswordVerifyPin] = useForgetPasswordVerifyPinMutation();
    const [addNewPassword] = useAddNewPasswordMutation();

    useEffect(() => {
        // Function to check if all fields are filled
        

        // Enable or disable submit button based on all fields being filled
        setSubmitDisable(!email.trim());
    }, [email]);


    const handleSubmit = async(e) => {
        try {
            e.preventDefault(); 
            setIsSubmitting(true);
            // console.log("submitting...");
            if (!verifyOtp) {
                setEmailErr(false);
                setEmailErrMsg("");
                // setIsSubmitting(true);
                const {data, error} = await forgetPasswordRequest({email});
                if (data) {
                    // console.log(data);
                    if (data?.status) {
                        // setIsVerified(true);
                        setVerifyOtp(true);
                        // setIsVerified(true)
                    }
                    if (!data?.status) {
                        // console.log(data?.status)
                        if (data?.errors?.email) {
                            setEmailErrMsg(data?.errors?.email[0]);
                            setEmailErr(true);
                        }
                    }
                }
                if (error) {
                    console.log(error);
                    errorMessage(error?.data?.message);
                }
                setIsSubmitting(false);
                
            }
            if (verifyOtp) {
                setOtpErr(false);
                setOtpErrMsg("");
                const { data, error} = await forgetPasswordVerifyPin({email,pin:otp});
                if (data) {
                    // console.log("data::",data);
                    if (data.status) {
                        // console.log("")
                        setIsSubmitting(false);
                        setIsVerified(true)
                    }
                    if (!data.status) {
                        // console.log("")
                        if (data.message) {
                            setOtpErrMsg(data.message);
                            setOtpErr(true);
                        }
                    }
                }
                if (error) {
                    console.log(error);
                }
                setIsSubmitting(false);
            }
        } catch (err) {
            console.log("err::",err);
        }
    }
    const handleUpdatePassword = async(password)=>{
        try {
            const {data, error } = await addNewPassword({email,new_password:password});
            if (data) {
                console.log(data);
                if (data.status) {
                    navigate('/login')
                }
                if (!data.status) {
                    console.log(data.message); 
                    if (data.message) {
                        // setPasswordErrMsg(data.message);
                        // setPasswordErr(true);
                        // }
                        }
                    }
            }
            if (error) {
                console.log("error::",error);
            }
            
        } catch (err) {
            console.log("err::",err)
        }

    }

    return (
        <>
            <div className='cred-page-wrapper'>
            {!isVerified &&
                <div className="col-sm-10 col-md-6 col-10 cred-page-inner-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="title-wrapper">
                            <h2 className="cred-title">{title} </h2>
                            <p>Enter the email associated with your account <br />and we will send an email with instructions to <br />reset your password.</p>
                        </div>
                        <div className="col-12">
                            <div className="field-wrapper">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" disabled={verifyOtp} readOnly={verifyOtp} ref={emailRef} required className={`form-control ${email.trim() ? 'not-empty' : ''} ${emailErr?' input-error':''}`} defaultValue={email} onChange={(e) => setEmail(e.target.value)} name='email' id='email' placeholder="Enter email address" />
                                <div className="err-msg">
                                    <p className={`m-0`} ref={emailMsgRef}>{emailErrMsg} </p>
                                </div>
                            </div>
                        </div>
                        {verifyOtp &&
                            <div className="col-12">
                                <div className="field-wrapper pb-3">
                                    <label className="form-label" htmlFor="otp">Otp</label>
                                    <input type="text" ref={otpRef} required className={`form-control ${otp.trim() ? 'not-empty' : ''} ${otpErr?' input-error':''}`} defaultValue={otp} onChange={(e) => setOtp(e.target.value)} name='otp' id='otp' placeholder="Enter OTP" />
                                    <div className="err-msg">
                                        <p className={`m-0 text-danger`} ref={otpMsgRef}>{otpErrMsg} </p>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className='p-0 form-action-buttons-wrapper'>
                            <div className="col-12 py-4">
                                <div className="form-action-buttons-inner-wrapper">
                                    <button type='submit' disabled={submitDisable || isSubmitting}>
                                        {isSubmitting? <ButtonLoader/>:'Send email'} 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }
            {isVerified &&
                    // <div className='cred-page-inner-wrapper'>

                    //     <div className='account-verified-container'>
                    //         <img src={verifiedIcon} />
                    //         <h2 className='verified-title'>Check Your Mail</h2>
                    //         <p>We have sent a password recovery link to your<br/> email address.</p>
                    //         {/* <div className="col-12">
                    //                 <Link to='/' className="btn btn-primary col-7">Continue</Link>
                    //         </div> */}
                    //     </div>
                    // </div>
                <CreateNewPassword handleUpdatePassword={handleUpdatePassword}/>
            }
            </div>
        </>

    )
}

export default ResetPassword