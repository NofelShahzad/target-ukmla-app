// import React from 'react'
// import { Link } from 'react-router-dom'
import './WebinarsCard.css'
// eslint-disable-next-line react/prop-types
function WebinarsCard({imgSrc,handleWebinarModal}) {
  return (
    <>
        <div className='col-sm-12 col-lg-6 col-12'>
            <div className='webinar-card'>
                    <div className='webinar-inner-card'>
                            <div className='webinar-img'>
                                <img src={imgSrc} alt="babies" />
                            </div>
                            <div className='webinar-card-body'>
                                    <div className='card-title-wrapper'>
                                            <h2 className='title'>Babies in PLAB - 11th May 2024</h2>
                                            <span className='date-time-wrapper'>(9:00 AM to 11:00 AM UK time)</span>
                                    </div>
                                    <div className='description'>
                                        <p>Join Dr.Dom, our expert pediatrician, to better understand pediatric questions and ensure you feel confident to tackle this challenging topic on exam day.</p>
                                    </div>
                                    <div className='speaker-container'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Speaker</th>
                                                    <th>When</th>
                                                    <th>Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Dr. Dom Carr</td>
                                                    <td>11th May 2024</td>
                                                    <td>£25 Per Webinar</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    
                                    <div className="webinar-card-footer">
                                        <button type='button' className='col-5 btn btn-detail' onClick={()=>handleWebinarModal()}>More Info</button>
                                        <button type='button' className='col-6 btn btn-primary'>Register</button>
                                    </div>
                            </div>
                    </div>
            </div>

        </div>
    </>
  )
}

export default WebinarsCard