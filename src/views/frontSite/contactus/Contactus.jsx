import React, { useState } from 'react'
import './contactus.css'
import { useContactusMutation } from '../../../redux/features/auth/authApi';
import { errorMessage, successMessage } from '../../../components/toastMessages/ToastifyMsg';

function Contactus() {
    const [contactData,setContactData]  = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [contactus] = useContactusMutation();

const handleSubmitContact = async(e)=>{
    try {
        e.preventDefault();
        const {data, error} = await contactus(contactData);
        if (data) {
            if (data?.status) {
                successMessage(data?.message);
            }
            if (!data?.status) {
                errorMessage(data?.message);
            }
        }
        if (error) {
            errorMessage(error?.data?.message ?? "Error");
            
        }
    } catch (err) {
        console.log("err::",err);
    }
}
const handleChange= (e)=>{
    const {name,value} = e.target;
    setContactData(prevState => ({...prevState, [name]: value}));

}

  return (
    <div className="container">
        <section className="contact" id="contact">
        <div className="container">
            <div className="heading text-center">
                <h2>Contact
                    <span> Us </span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br/>incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="title">
                        <h3>Contact detail</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                    <div className="content">
                        {/* <!-- Info-1 --> */}
                        <div className="info">
                            <i className="fas fa-mobile-alt"></i>
                            <h4 className="d-inline-block">PHONE :
                                <br/>
                                <span>+12457836913 , +12457836913</span></h4>
                        </div>
                        {/* <!-- Info-2 --> */}
                        <div className="info">
                            <i className="far fa-envelope"></i>
                            <h4 className="d-inline-block">EMAIL :
                                <br/>
                                <span>example@info.com</span></h4>
                        </div>
                        {/* <!-- Info-3 --> */}
                        <div className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            <h4 className="d-inline-block">ADDRESS :<br/>
                                <span>6743 last street , Abcd, Xyz</span></h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-7">

                    <form onSubmit={handleSubmitContact}>
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" required className="form-control" placeholder="First Name" name='first_name' onChange={(e)=>handleChange(e)} />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" required className="form-control" placeholder="Last Name" name='last_name' onChange={(e)=>handleChange(e)} />
                            </div>
                            <div className="col-sm-12">
                                <input type="email" required className="form-control" placeholder="Email" name='email' onChange={(e)=>handleChange(e)} />
                            </div>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" placeholder="Phone number" name="phone" onChange={(e)=>handleChange(e)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" required rows="5" id="comment" placeholder="Message" name='message' onChange={(e)=>handleChange(e)}></textarea>
                        </div>
                        <button className="btn btn-block" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contactus