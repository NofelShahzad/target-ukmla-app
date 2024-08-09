import { useEffect, useState } from 'react'
import notCheckedIcon from '../../assets/icons/not-checked-icon.svg'
import successCheckedIcon from '../../assets/icons/success-tick-icon.svg'
import wrongCrossIcon from '../../assets/icons/wrong-cross-icon.svg'
import eyeIcon from '../../assets/icons/eye-icon.svg'
import eyeBoldIcon from '../../assets/icons/eye-bold-icon.svg'
import eyeHide from '../../assets/icons/eye-hide-icon.svg'
import verifiedIcon from '../../assets/icons/verified-icon.svg'
import { Link } from 'react-router-dom'
import { useRegisterUserMutation } from '../../redux/features/auth/authApi'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/features/auth/authSlice'

function Signup() {

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms_cond: false,
    receive_email: false
  });

  const [validation, setValidation] = useState({
    hasLength: false,
    hasLetter: false,
    hasNumber: false
  });
  
  const [respData,setRespData] = useState(null);

  const [submitDisable, setSubmitDisable] = useState(true);

  const [registerUser] = useRegisterUserMutation();

  const handleChangeInput = (e) => {

    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  }
  const handleChangeCheck = (e) => {
    // console.log()
    setSignupData(prev=> ({ ...prev, [e.target.name]: e.target.checked }))
  }



  useEffect(() => {

    const password = signupData.password;
    const hasLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    setValidation({
      hasLength,
      hasLetter,
      hasNumber
    });

    const isAllFieldsValid = () => {
      const { firstName, lastName, email, password, terms_cond, receive_email } = signupData;
      return (
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        email.trim() !== '' &&
        terms_cond &&
        receive_email &&
        password.length >= 8 &&
        /[a-zA-Z]/.test(password) &&
        /\d/.test(password)
      );
    };

    setSubmitDisable(!isAllFieldsValid());
  }, [signupData]);


  const handleValidatePassword = (e) => {
    e.preventDefault();
  }



  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log("submitted::>")
      // setIsSubmitting(true);
      // setTimeout(() => {
      //   setIsVerified(true);
      // }, 2000);

      // console.log("signupData::",signupData);
      const body ={
        first_name : signupData?.firstName,
        last_name : signupData?.lastName,
        email : signupData?.email,
        password : signupData?.password,
        terms_cond : signupData?.terms_cond,
        receive_email : signupData?.receive_email
      }

      const { data, error } = await registerUser(body);

      if (data) {
        setIsSubmitting(false);
        setIsVerified(true);
        setRespData(data);
        
      }
      if (error) {
        console.log("register-error::", error);
      }

    } catch (err) {
      console.log(err)
    }
  }
  
  const handleLogin = ()=>{
    dispatch(setAuth(respData));
  }

  return (
    <div className='cred-page-wrapper'>
      {/* <div className='progressbar-wrapper'>
        <div className='progressbar-inner-wrapper' style={{'width': isVerified ?'60%':'30%'}}></div>
      </div> */}
      {/* <div className='container'> */}
      {!isVerified &&
        <div className="col-sm-10 col-md-7 col-xl-6 col-xxl-5 col-10 cred-page-inner-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="title-wrapper">
              <h2 className="cred-title">Sign Up</h2>
              <p>Create a user account to subscribe to our high yield Question Bank and other impactful resources to help you pass PLAB part 1 or the MLA AKT.</p>
            </div>
            <div className="signup-form-wrapper">
              <div className="col-sm-6 col-12">
                <div className="field-wrapper">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                  <input type="text" required className={`form-control ${signupData?.firstName.trim() ? 'not-empty' : ''}`} defaultValue={signupData?.firstName} onChange={(e) => handleChangeInput(e)} name='firstName' id='firstName' placeholder="Enter first name" />
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="field-wrapper">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                  <input type="text" required className={`form-control ${signupData?.lastName.trim() ? 'not-empty' : ''}`} defaultValue={signupData?.lastName} onChange={(e) => handleChangeInput(e)} name='lastName' id='lastName' placeholder="Enter last name" />
                </div>
              </div>
              <div className="col-12">
                <div className="field-wrapper">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" required className={`form-control ${signupData?.email.trim() ? 'not-empty' : ''}`} defaultValue={signupData?.email} onChange={(e) => handleChangeInput(e)} name='email' id='email' placeholder="Enter email address" />
                </div>

              </div>
              <div className="col-12">
                <div className="field-wrapper ">
                  <label className="form-label" htmlFor="firstName">Password</label>
                  <div className="password-wrapper">
                    <input type={!showPassword ? 'password' : 'text'} required className={`form-control ${signupData?.password.trim() ? 'not-empty' : ''}`} defaultValue={signupData?.password} onChange={(e) => handleChangeInput(e)} onBlur={(e) => handleValidatePassword(e)} name='password' id='password' placeholder="Enter password" />
                    <img src={showPassword ? eyeHide : signupData?.password.trim() ? eyeBoldIcon : eyeIcon} onClick={() => setShowPassword(prevShow => !prevShow)} alt="eye" />
                  </div>
                </div>
              </div>
              {/* { signupData?.password.trim() && */}
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
                    <li><span><img src={validation?.hasLength ? successCheckedIcon : !validation?.length && signupData?.password ? wrongCrossIcon : notCheckedIcon} /> </span> At least 8 characters</li>
                    <li><span><img src={validation?.hasLetter ? successCheckedIcon : !validation?.hasLetter && signupData?.password ? wrongCrossIcon : notCheckedIcon} /> </span>At least one letter </li>
                    <li><span><img src={validation?.hasNumber ? successCheckedIcon : !validation?.hasNumber && signupData?.password ? wrongCrossIcon : notCheckedIcon} /> </span> At least one number</li>
                  </ul>
                </div>
              </div>
              {/* } */}
              <div className="col-12">
                <div className="check-field-wrapper">

                  <input type="checkbox" onChange={(e) => handleChangeCheck(e)} defaultChecked={signupData?.terms_cond} name="terms_cond" id="terms_cond" />

                  <label className="ps-3" htmlFor="terms_cond">I agree to the <a href='#'> Terms and Conditions</a>*</label>

                </div>

              </div>
              <div className="col-12">
                <div className="check-field-wrapper">

                  <input type="checkbox" onChange={(e) => handleChangeCheck(e)} defaultChecked={signupData?.receive_email} name="receive_email" id="receive_email" />


                  <label className="ps-3" htmlFor="receive_email">Opt in to receive email communications (maintenance of website, updates, information on free and paid revision courses)</label>

                </div>

              </div>

            </div>
            {/* <div className="d-flex"> */}

            <div className='form-action-buttons-wrapper'>
              <div className="col-7">
                <div className="form-action-buttons-inner-wrapper">
                  <button type='submit' disabled={submitDisable || isSubmitting}>Creat{isSubmitting ? 'ing' : 'e'} account</button>
                  <Link to='/login' className="btn">Already have an account</Link>

                </div>
              </div>
              <div className="navigate-btn">
              </div>
            </div>

          </form>

        </div>
      }
      {isVerified &&
        <div className='cred-page-inner-wrapper'>

          <div className='account-verified-container'>
            <img src={verifiedIcon} />
            <h2 className='verified-title'>Thank You!</h2>
            <p>You are successfully sign up in to your account.</p>

            <button className='btn btn-primary' onClick={handleLogin}>Continue</button>
          </div>
        </div>

      }

      {/* </div> */}

    </div>
  )
}

export default Signup