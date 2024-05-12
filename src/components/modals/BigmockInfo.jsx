// import React from 'react'

// eslint-disable-next-line react/prop-types
function BigmockInfo({ closeBtn, closeModal }) {
    return (
        <>
            <section className='detail-modal'>
                <div className='close-btn-container'>
                    <img src={closeBtn} alt='close' onClick={closeModal} />
                </div>
                <div className='title-wrapper'>
                    <h2 className='title'>Big Mock April 2024</h2>
                    {/* <div className='date-time-wrapper'><span>18th May 2024 (9:00 AM to 11:00 AM UK time)</span></div> */}
                </div>
                <div className='description'>
                    <p>The passing mark for this BIG MOCK is 114/180.</p>
                </div>
            </section>
        </>
    )
}

export default BigmockInfo