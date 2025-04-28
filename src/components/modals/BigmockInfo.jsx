// import React from 'react'

import { Markup } from "react-render-markup"

// import BigmockDetail from "../../views/dashboard/BigmockDetail"

// eslint-disable-next-line react/prop-types
function BigmockInfo({ closeBtn, closeModal,bigMockDetail }) {
    // console.log("bigMockDetail::",bigMockDetail)
    return (
        <>
            <section className='detail-modal'>
                <div className='close-btn-container'>
                    <img src={closeBtn} alt='close' onClick={closeModal} />
                </div>
                <div className='title-wrapper'>
                    <h2 className='title'>{bigMockDetail?.name}</h2>
                    {/* <div className='date-time-wrapper'><span>18th May 2024 (9:00 AM to 11:00 AM UK time)</span></div> */}
                </div>
                <div className='description'>
                    <Markup markup={bigMockDetail?.description}/>
                    <p className="mt-2">The passing mark for this BIG MOCK is {bigMockDetail?.passing_marks}/{bigMockDetail?.published_questions_count}.</p>
                </div>
            </section>
        </>
    )
}

export default BigmockInfo