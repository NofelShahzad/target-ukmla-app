import { useEffect, useState } from 'react';
import eyeIcon from '../../assets/icons/eye-icon.svg';
import eyeBoldIcon from '../../assets/icons/eye-bold-icon.svg';
import eyeHide from '../../assets/icons/eye-hide-icon.svg';
import notCheckedIcon from '../../assets/icons/not-checked-icon.svg';
import successCheckedIcon from '../../assets/icons/success-tick-icon.svg';
import wrongCrossIcon from '../../assets/icons/wrong-cross-icon.svg';
import verifiedIcon from '../../assets/icons/verified-icon.svg';
import { Link } from 'react-router-dom';

function CreateNewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [submitDisable, setSubmitDisable] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState({
        hasLength: false,
        hasLetter: false,
        hasNumber: false
    });
    useEffect(() => {
        const hasLength = password.length >= 8;
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /\d/.test(password);

        setValidation({
            hasLength,
            hasLetter,
            hasNumber
        });
        if (hasLength && hasLetter && hasNumber) {
            setSubmitDisable(false)
        }else setSubmitDisable(true)

    }, [password])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsVerified(true);
        setIsSubmitting(true);
    }



    return (
        <>
            <div className='cred-page-wrapper'>
                {!isVerified &&
                    <div className="col-sm-10 col-md-6 col-10 cred-page-inner-wrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="title-wrapper">
                                <h2 className="cred-title">Log In</h2>
                            </div>
                            <div className="signup-form-wrapper">

                                <div className="col-12">
                                    <div className="field-wrapper ">
                                        <label className="form-label" htmlFor="firstName">Password</label>
                                        <div className="password-wrapper">
                                            <input type={!showPassword ? 'password' : 'text'} required className={`form-control ${password.trim() ? 'not-empty' : ''}`} defaultValue={password} onChange={(e) => setPassword(e.target.value)} name='password' id='password' placeholder="Enter password" />
                                            <img src={showPassword ? eyeHide : password.trim() ? eyeBoldIcon : eyeIcon} onClick={() => setShowPassword(prevShow => !prevShow)} alt="eye" />
                                        </div>
                                    </div>
                                </div>
                                {/* { password.trim() && */}
                                <div className="col-12">
                                    <div className="validation-container">
                                        <div className="validator-title">
                                            <p>Your password must include</p>
                                            <div className="validate-type">
                                                <span>
                                                    {validation?.hasLength && validation?.hasLetter && validation?.hasNumber ? 'Strong' : 'Weak'}
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="validator-list">
                                            <li><span><img src={validation?.hasLength ? successCheckedIcon : !validation?.length && password ? wrongCrossIcon : notCheckedIcon} /> </span> At least 8 characters</li>
                                            <li><span><img src={validation?.hasLetter ? successCheckedIcon : !validation?.hasLetter && password ? wrongCrossIcon : notCheckedIcon} /> </span>At least one letter </li>
                                            <li><span><img src={validation?.hasNumber ? successCheckedIcon : !validation?.hasNumber && password ? wrongCrossIcon : notCheckedIcon} /> </span> At least one number</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className='p-0 form-action-buttons-wrapper'>
                                <div className="col-12">
                                    <div className="form-action-buttons-inner-wrapper">
                                        <button type='submit' disabled={submitDisable || isSubmitting}>Update Password</button>

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
                            <h2 className='verified-title'>Password Updated!</h2>
                            <p>Your password has been successfully update. <br />Login to your account.</p>
                            <div className="col-12">
                                <Link to='/' className="btn btn-primary col-7">Login</Link>
                            </div>
                        </div>
                    </div>

                }

            </div>
        </>
    )
}

export default CreateNewPassword