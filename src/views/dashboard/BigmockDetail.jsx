// import React from 'react'

import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";
import babiesImg from '../../assets/images/dashboard/webinars/babies.webp'
import '../../components/bigmocksCard/BigmocksCard.css'
function BigmockDetail() {
    return (
        <>
            <div className="container-fluid bigmock-detail-page">
                <div className='page-title-container'>
                    <h2 className="title">Big Mock</h2>
                    <p>Text explaining what these are.</p>
                </div>
                <div className="col-md-9 col-12">
                    <div className="bigmocks-card">
                        <div className="bigmocks-inner-card">
                            <div className="bigmocks-img">
                                <img src={babiesImg} />
                            </div>
                            <div className="bigmocks-card-body">
                                <div className="card-title-wrapper">
                                    <h2 className="title">Big Mock - April 2024</h2>
                                </div>
                                <div className="description">
                                    <p>Join out new and improved 4-day online PLAB 1 exam Revision Course with Dr. Adam Jakes & Dr. Wei Zian Szetho &apos;Sze&apos;!</p>
                                </div>
                                <div className="course-date-container">
                                    <h2 className="title">Course Dates</h2>
                                    <p>17th July 2024 (10:00 am - 5:30 pm) UK Time</p>
                                    <p>18th July 2024 (10:00 am - 5:30 pm) UK Time</p>
                                    <p>19th July 2024 (10:00 am - 5:30 pm) UK Time</p>
                                    <p>20th July 2024 (1:30 pm - 5:30 pm) UK Time</p>
                                </div>
                                <div className="price-details">
                                    <p>£130 per person<br /> (Includes a dedicated WhatsApp group with access to course tutors to answer questions, revision slides and the NEW BIG MOCK, which would be discussed in-depth).</p>
                                </div>
                                {/* <div className="bigmocks-card-footer">
                                  <button type='button' className='btn btn-detail' onClick={()=>handleBigmockModal()}>More Info</button>
                                  <button type='button' className='btn btn-primary' onClickCapture={()=>handleNavigate()}>Pruchase</button>
                              </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
const AuthenticatedDashboard = withAuth(BigmockDetail);
const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

export default LayoutAuthenticatedDashboard;