import { useState } from 'react'
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
                <h2 className='mb-3'>Contact
                    <span> Us </span></h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br/>incididunt ut labore et dolore magna aliqua.</p> */}
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="title">
                        <h3>Contact detail</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p> */}
                    </div>
                    <div className="content">
                        {/* <!-- Info-1 --> */}
                        <div className="info">
                            {/* <i className="fas fa-mobile-alt"></i> */}
                            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xmlSpace="preserve"><path fill="none" stroke="#5eb9f0" strokeWidth="2" strokeMiterlimit="10" d="M13.6 8.5 9.5 4.3c-.5-.4-1.2-.4-1.7 0L4.7 7.5c-.7.6-.9 1.6-.6 2.4.8 2.3 2.9 6.9 7 11s8.7 6.1 11 7c.9.3 1.8.1 2.5-.5l3.1-3.1c.5-.5.5-1.2 0-1.7l-4.1-4.1c-.5-.5-1.2-.5-1.7 0L19.4 21s-2.8-1.2-5-3.3-3.3-5-3.3-5l2.5-2.5c.5-.5.5-1.3 0-1.7z"/></svg>
                            <h4 className="d-inline-block">PHONE :
                                <br/>
                                <span>+12457836913 , +12457836913</span></h4>
                        </div>
                        {/* <!-- Info-2 --> */}
                        <div className="info">
                            {/* <i className="far fa-envelope"></i> */}
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671 18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z" fill="#5eb9f0"/></svg>
                            <h4 className="d-inline-block">EMAIL :
                                <br/>
                                <span>example@info.com</span></h4>
                        </div>
                        {/* <!-- Info-3 --> */}
                        <div className="info">
                            {/* <i className="fas fa-map-marker-alt"></i> */}
                            <svg width="25" height="25" fill='#5eb9f0' viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><path d="M512 1012.8C258.4 1012.8.8 958.4.8 854.4c0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8.8 6.4-.8 12.8-4.8 17.6s-9.6 8.8-16 9.6c-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4S974.4 900 974.4 855.2c0-24-66.4-70.4-244.8-96-6.4-.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2.8 103.2-256 158.4-509.6 158.4m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6-.8-140.8-116-256.8-257.6-256.8m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160s144.8 64.8 144.8 144.8S592 449.6 512 449.6m0-241.6c-53.6 0-96.8 43.2-96.8 96.8s43.2 96.8 96.8 96.8 96.8-43.2 96.8-96.8-44-96.8-96.8-96.8"/></svg>
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