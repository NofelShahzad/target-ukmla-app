// import React from 'react'
// import { Link } from 'react-router-dom'
import { Markup } from 'react-render-markup';
import ButtonLoader from '../loaders/ButtonLoader';
import './WebinarsCard.css'
import moment from "moment/moment";

// eslint-disable-next-line react/prop-types
function WebinarsCard({imgSrc,handleWebinarModal, handleConfirmPurchase, webinar, isPurchasing}) {


    const handleJoinWebinar = ()=>{
        console.log("webinar_link::",webinar?.webinar_link)
        window.open(webinar?.webinar_link, '_blank');
    }
  return (
    <>
        <div className='col-sm-12 col-xl-6 col-12'>
            <div className='webinar-card'>
                    <div className='webinar-inner-card'>
                            <div className='col-3 webinar-img'>
                                <img src={imgSrc} alt="babies" />
                            </div>
                            <div className='webinar-card-body'>
                                    <div className='card-title-wrapper'>
                                        {/* Babies in PLAB - 11th May 2024 */}
                                            <h2 className='title'> {webinar?.name} </h2>
                                            <span className='date-time-wrapper'>({moment(webinar?.webinar_start_at).format('LT') } to {moment(webinar?.webinar_end_at).format('LT') }  UK time)</span>
                                    </div>
                                    <div className='description'>
                                        {/* <p>{webinar?.description}</p> */}
                                        <Markup markup={webinar?.description} />
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
                                                    <td>{webinar?.speaker}</td>
                                                    <td>{moment(webinar?.webinar_start_at).format('ll')}</td>
                                                    <td>£{webinar?.price} Per Webinar</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    
                                    <div className="webinar-card-footer">
                                        <div className='col-6 pe-1'>
                                            <button type='button' className='btn btn-detail' onClick={()=>handleWebinarModal()}>More Info</button>
                                        </div>
                                        <div className='col-6 ps-1'>
                                            {!webinar?.purchased &&
                                                <button type='button' className={`btn btn-primary`} 
                                                disabled={(isPurchasing?.id===webinar?.id && isPurchasing?.loading )} onClick={()=>handleConfirmPurchase(webinar)} >
                                                    {isPurchasing?.id===webinar?.id && isPurchasing?.loading ?<ButtonLoader/>: webinar?.purchased?  "Join":'Register' }
                                                </button>
                                            }
                                            {webinar?.purchased &&
                                                <button type='button' className={`btn btn-primary`} 
                                                disabled={((!webinar?.webinar_link && webinar?.purchased))} onClick={handleJoinWebinar} >
                                                    {webinar?.purchased &&  "Join" }
                                                </button>
                                            }
                                        </div>
                                    </div>
                            </div>
                    </div>
            </div>

        </div>
    </>
  )
}

export default WebinarsCard