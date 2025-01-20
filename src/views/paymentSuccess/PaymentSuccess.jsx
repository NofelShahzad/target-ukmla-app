// import React from 'react'
// import { Link } from 'react-router-dom';
import './PaymentSuccess.css'

function PaymentSuccess() {
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get('message');
    const backUrl = queryParams.get('url');
    console.log("backUrl::",backUrl);
    const handleBackurl = ()=>{
        document.location.href = backUrl;
    }
    return (
        <div className="container payment-page">
            {/* <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="message-box _success">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                        <h2> Your payment was successful </h2>
                        <p> {message} </p>
                        <br/>
                        <br/>
                        <button onClick={handleBackurl} to={backUrl} href={backUrl} className='btn btn-primary'>Continue</button>
                    </div>
                </div>
            </div> */}
            <div className="row justify-content-center payment-inner-page">
                <div className="card col-md-5 text-center">
                    <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
                        <i className="checkmark">✓</i>
                    </div>
                    <h1>Success</h1>
                    <p>{message}</p>
                    <br />
                    <br />
                    <button onClick={handleBackurl} to={backUrl} href={backUrl} className='btn btn-primary'>Continue</button>

                </div>

            </div>


            {/* <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="message-box _success _failed">
                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                        <h2> Your payment failed </h2>
                        <p>  Try again later </p>

                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default PaymentSuccess