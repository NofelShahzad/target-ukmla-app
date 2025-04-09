import React, { useState } from 'react'
import eyeIcon from '../../assets/icons/eye-icon.svg'
import eyeBoldIcon from '../../assets/icons/eye-bold-icon.svg'
import eyeHide from '../../assets/icons/eye-hide-icon.svg'
import { useSelector } from 'react-redux'
import { useUpdatePasswordMutation } from '../../redux/features/auth/authApi'
import { errorMessage, successMessage } from '../../components/toastMessages/ToastifyMsg'
import { useRef } from 'react'
import PageLoader from '../../components/pageLoader/PageLoader'
function ChangePassword() {

  const auth = useSelector(state=>state.auth)

  // const emailRef = useRef(null);
  const [currentErrMsg, setcurrentErrMsg] = useState("");
  // const newPasswordMsgRef = useRef(null);
  const [newPasswordErrMsg, setNewPasswordErrMsg] = useState("");
  // const newConfirmPasswordMsgRef = useRef(null);
  const [newConfirmPasswordErrMsg, setNewConfirmPasswordErrMsg] = useState("");
  const emailMsgRef = useRef(null);



  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConPassword, setShowNewConPassword] = useState(false);
  const [updatePasswordForm,setUpdatePasswordForm]  = useState({
    current_password: "", new_password: "", new_password_confirmation: ""
  })

  const [isLoading,setIsLoading] = useState(false);
  const [isLoadingMsg,setIsLoadingMsg] = useState("");

  const handleChangeInput  = (e)=>{
    setUpdatePasswordForm(prev=>({...prev,[e.target.name]:e.target.value}))
    if (e.target.name==="current_password") {
      setcurrentErrMsg("");
    }
    if (e.target.name==="new_password") {
      setNewPasswordErrMsg("");
    }
    if (e.target.name==="new_password_confirmation") {
      setNewConfirmPasswordErrMsg("");
    }
  }

  const [updatePassword] = useUpdatePasswordMutation();
  const handleSubmit = async(e)=>{
    try {
      e.preventDefault();
      setIsLoading(true);
      setIsLoadingMsg("Updating Password");

      const {data,error} = await updatePassword(updatePasswordForm);
      if (data) {
        // console.log(data);
        if (data?.status) {
          successMessage(data.message);
          setUpdatePasswordForm({
            current_password: "", new_password: "", new_password_confirmation: ""
          })
        }
        if (!data?.status) {
          if (!data?.errors) {
            errorMessage(data.message)
          }
            if (data?.errors?.current_password) {
              setcurrentErrMsg(data?.errors?.current_password)
            }
            if (data?.errors?.new_password) {
              setNewPasswordErrMsg(data?.errors?.new_password) 
            }
            if (data?.errors?.new_password_confirmation) {
              setNewConfirmPasswordErrMsg(data?.errors?.new_password_confirmation)
            }
        }
        setIsLoading(false);
      }
      if (error) {
        errorMessage(error.data.message);
        // if (error) {
        //   errorMessage
        // }
        setIsLoading(false);
      }
    } catch (err) {
      console.log("err::",err);
    }
  }
 
  
  return (
    <>
    {isLoading && <PageLoader msg={isLoadingMsg}/>}
      <div className="container-fluid update-password-wrapper">
          <div className='page-title-container'>
              <h2 className="title">Account Info</h2>
              {/* <p>Text explaining what these are.</p> */}
          </div>

          <div className="col-lg-9 col-xl-8 col-xxl-6 pt-3">
            <form onSubmit={handleSubmit}>

            <div className="field-wrapper d-flex align-items-center pb-4">
              <label className="form-label col-3 mb-0" >Name</label>
                <input type={'text'} required className={`form-control `} disabled defaultValue={`${auth?.user?.name} ${auth?.user?.last_name}`}  />
            </div>
            <div className="field-wrapper d-flex align-items-center pb-4">
              <label className="form-label col-3 mb-0" >Email</label>
                <input type={'text'} required className={`form-control `} disabled defaultValue={auth?.user?.email}  />
            </div>
            <div className="field-wrapper d-flex align-items-center pb-4">
              <label className="form-label col-3 mb-0" htmlFor="current_password">Current Password</label>
              <div className="password-wrapper w-100">
                <input type={!showPassword ? 'password' : 'text'} required className={`form-control ${updatePasswordForm?.current_password.trim() ? 'not-empty' : ''}`} value={updatePasswordForm?.current_password} onChange={(e) => handleChangeInput(e)} name='current_password' id='current_password' />
                <img src={showPassword ? eyeHide : updatePasswordForm?.current_password.trim() ? eyeBoldIcon : eyeIcon} onClick={() => setShowPassword(prevShow => !prevShow)} alt="eye" />
                <div className="err-msg p-0">
                      <p className={`m-0 text-danger`} style={{right:"unset!important",left: "5px!important"}} ref={emailMsgRef}>{currentErrMsg}</p>
                    </div>
              </div>
            </div>
            <div className="field-wrapper d-flex align-items-center pb-4">
              <label className="form-label col-3 mb-0" htmlFor="new_password">New Password</label>
              <div className="password-wrapper w-100">
                <input type={!showNewPassword ? 'password' : 'text'} required className={`form-control ${updatePasswordForm?.new_password.trim() ? 'not-empty' : ''}`} value={updatePasswordForm?.new_password} onChange={(e) => handleChangeInput(e)} name='new_password' id='new_password' />
                <img src={showNewPassword ? eyeHide : updatePasswordForm?.new_password.trim() ? eyeBoldIcon : eyeIcon} onClick={() => setShowNewPassword(prevShow => !prevShow)} alt="eye" />
                <div className="err-msg p-0">
                      <p className={`m-0 text-danger`} style={{right:"unset!important",left: "5px!important"}} ref={emailMsgRef}>{newPasswordErrMsg}</p>
                    </div>
              </div>
            </div>
            <div className="field-wrapper d-flex align-items-center pb-4">
              <label className="form-label col-3 mb-0" htmlFor="new_password_confirmation">Confirm Password</label>
              <div className="password-wrapper w-100">
                <input type={!showNewConPassword ? 'password' : 'text'} required className={`form-control ${updatePasswordForm?.new_password.trim() ? 'not-empty' : ''}`} value={updatePasswordForm?.new_password_confirmation} onChange={(e) => handleChangeInput(e)} name='new_password_confirmation' id='new_password_confirmation' />
                <img src={showNewConPassword ? eyeHide : updatePasswordForm?.new_password_confirmation.trim() ? eyeBoldIcon : eyeIcon} onClick={() => setShowNewConPassword(prevShow => !prevShow)} alt="eye" />
                <div className="err-msg p-0">
                      <p className={`m-0 text-danger`} style={{right:"unset!important",left: "5px!important"}} ref={emailMsgRef}>{newConfirmPasswordErrMsg}</p>
                    </div>
              </div>
            </div>
            <div className='text-end'>
              <button type="submit" className='btn btn-primary mt-3 col-lg-7'>Update Password</button>
            </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default ChangePassword