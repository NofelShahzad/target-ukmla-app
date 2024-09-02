// import React from 'react'
import moment from "moment/moment"
import { Markup } from "react-render-markup"
// eslint-disable-next-line react/prop-types
function WebinarsInfo({closeBtn,handleCloseWebinarModal,webinarDetail}) {
  return (
    <>
          <section className='detail-modal'>
                        <div className='close-btn-container'>
                            <img src={closeBtn} alt='close' onClick={handleCloseWebinarModal} />
                        </div>
                        <div className='title-wrapper'>
                            <h2 className='title'>{webinarDetail?.name}</h2>
                            <div className='date-time-wrapper'><span>{moment(webinarDetail?.webinar_start_at).format('ll')} ({moment(webinarDetail?.webinar_start_at).format('LT') } to {moment(webinarDetail?.webinar_end_at).format('LT') } UK time)</span></div>
                        </div>
                        <div className='description'>
                        <Markup markup={webinarDetail?.description} />
                            {/* <p>A very popular webinar to help gain clarification on swabs,<br/> contraception, disorders in pregnancy and gynaecological<br/> conditions.</p> */}
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
                                        <td>{webinarDetail?.speaker}</td>
                                        <td>{moment(webinarDetail?.webinar_start_at).format('ll')}</td>
                                        <td>£{webinarDetail?.price} Per Webinar</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='price-details'>
                            <p>£{webinarDetail?.price} per webinar (includes dedicated WhatsApp group +<br/> revision summary Slides post-webinar)</p>
                        </div>
                    </section>
    </>
  )
}

export default WebinarsInfo