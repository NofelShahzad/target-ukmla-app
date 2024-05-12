// import React from 'react'

// eslint-disable-next-line react/prop-types
function WebinarsInfo({closeBtn,handleWebinarModal}) {
  return (
    <>
          <section className='detail-modal'>
                        <div className='close-btn-container'>
                            <img src={closeBtn} alt='close' onClick={handleWebinarModal} />
                        </div>
                        <div className='title-wrapper'>
                            <h2 className='title'>O&G Essentials for PLAB</h2>
                            <div className='date-time-wrapper'><span>18th May 2024 (9:00 AM to 11:00 AM UK time)</span></div>
                        </div>
                        <div className='description'>
                            <p>A very popular webinar to help gain clarification on swabs,<br/> contraception, disorders in pregnancy and gynaecological<br/> conditions.</p>
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
                        <div className='price-details'>
                            <p>£25 per webinar (includes dedicated WhatsApp group +<br/> revision summary Slides post-webinar)</p>
                        </div>
                    </section>
    </>
  )
}

export default WebinarsInfo