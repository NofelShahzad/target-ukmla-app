// import React from 'react'

import { Link } from "react-router-dom";

function PaymentFailure() {
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get('message');
    const backUrl = queryParams.get('url');
    // console.log("backUrl::",backUrl);
    const handleBackurl = () => {
        document.location.href = backUrl;
    }
    return (
        <div className="container payment-page failure">
             <div className="row justify-content-center payment-inner-page">
                <div className="card col-md-5 text-center">
                    <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
                        <i className="checkmark">✗</i>
                    </div>
                    <h1>Failure</h1>
                    <p>{message}</p>
                    <br />
                    <br />
                    <Link to='/' 
                    // onClick={handleBackurl} 
                     className='btn btn-primary'>Back</Link>

                </div>

            </div>
        </div>
    )
}

export default PaymentFailure