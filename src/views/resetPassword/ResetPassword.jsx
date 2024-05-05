import { useEffect, useRef, useState } from "react";
import verifiedIcon from '../../assets/icons/verified-icon.svg';

function ResetPassword() {

    const [email, setEmail] = useState("");
    const emailRef = useRef(null);
    const emailMsgRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitDisable, setSubmitDisable] = useState(true);
    const [isVerified,setIsVerified] = useState(false);

    useEffect(() => {
        // Function to check if all fields are filled
        

        // Enable or disable submit button based on all fields being filled
        setSubmitDisable(!email.trim());
    }, [email]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting...")
        setIsSubmitting(true);
        setIsVerified(true)
    }

    return (
        <>
            <div className='cred-page-wrapper'>
            {!isVerified &&
                <div className="col-sm-10 col-md-6 col-10 cred-page-inner-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="title-wrapper">
                            <h2 className="cred-title">Reset Password</h2>
                            <p>Enter the email associated with your account <br />and we will send an email with instructions to <br />reset your password.</p>
                        </div>
                        <div className="col-12">
                            <div className="field-wrapper">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" ref={emailRef} required className={`form-control ${email.trim() ? 'not-empty' : ''}`} defaultValue={email} onChange={(e) => setEmail(e.target.value)} name='email' id='email' placeholder="Enter email address" />
                                <div className="err-msg">
                                    <p className={`opacity-0`} ref={emailMsgRef}>Your email is incorrect!</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-0 form-action-buttons-wrapper'>
                            <div className="col-12">
                                <div className="form-action-buttons-inner-wrapper">
                                    <button type='submit' disabled={submitDisable || isSubmitting}>Send password reset link</button>
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
                            <h2 className='verified-title'>Check Your Mail</h2>
                            <p>We have sent a password recovery link to your<br/> email address.</p>
                            {/* <div className="col-12">
                                    <Link to='/' className="btn btn-primary col-7">Continue</Link>
                            </div> */}
                        </div>
                    </div>

                }
            </div>
        </>

    )
}

export default ResetPassword