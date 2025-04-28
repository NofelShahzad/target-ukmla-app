// import React from 'react'
import './bigmock.css';
import bigmockOne from './bigmockAssets/bigmock1.jpeg'
function BigMock() {
  return (
  <>
  <main className='pt-5'>
    <div className="container"> 

    <h1 className="big-mock-heading">Big Mock</h1>
    <p className="big-mock-description">
      180 brand-new high-yield questions—not found in the main Question Bank—designed to truly test your readiness for <span className='fw-600'>PLAB 1</span> and the <span className='fw-600'>UKMLA AKT</span>.</p>  
    <br />
    <p> <strong>Why do the BIG MOCK?</strong></p>
    <p className="big-mock-description">
    The BIG MOCK is built for the final phase of your preparation—when you’re nearly exam-ready and need to challenge yourself. It’s designed to:</p>
    <ul className='big-mock-description'>
      <li>Mix familiar topics with ones you might not be prepared for</li>
      <li>Mimic the pressure, pacing, and unpredictability of the real exam</li>
      <li>Help predict your actual exam score with greater accuracy</li>
      <li>Identify weak spots under timed conditions</li>
    </ul>
    <p className='big-mock-description mb-4'>
     <span className='fw-600'>Tip:</span> Use it under timed conditions (3 hours) to get the full benefit and a realistic exam-day feel.
    </p>
    <div className="big-mock-box">
        <img src={bigmockOne} alt="Big Mock Image" className="big-mock-image"/>
        <div className="big-mock-details">
            <h2 className="big-mock-title">BIG MOCK July 2024</h2>
            <p className="big-mock-description">
                Our newest Big Mock is tailored for the upcoming PLAB 1 exam!
            </p>
            <div className='frontmockbtnfooter'>
              <button className="button more-info">More Info</button>
              <button className="button purchase">Purchase</button>
            </div>
        </div>
    </div>
    <div className="big-mock-box">
        <img src={bigmockOne} alt="Big Mock Image" className="big-mock-image"/>
        <div className="big-mock-details">
            <h2 className="big-mock-title">BIG MOCK October 2024</h2>
            <p className="big-mock-description">
                Our newest Big Mock is tailored for the upcoming PLAB 1 exam!
            </p>
            <div className='frontmockbtnfooter'>
              <button className="button more-info">More Info</button>
              <button className="button purchase">Purchase</button>
            </div>
        </div>
    </div>
    <div className="big-mock-box">
        <img src={bigmockOne} alt="Big Mock Image" className="big-mock-image"/>
        <div className="big-mock-details">
            <h2 className="big-mock-title">BIG MOCK July 2024</h2>
            <p className="big-mock-description">
                Our newest Big Mock is tailored for the upcoming PLAB 1 exam!
            </p>
            <div className='frontmockbtnfooter'>
              <button className="button more-info">More Info</button>
              <button className="button purchase">Purchase</button>
            </div>
        </div>
    </div>
    <div className="big-mock-box">
        <img src={bigmockOne} alt="Big Mock Image" className="big-mock-image"/>
        <div className="big-mock-details">
            <h2 className="big-mock-title">BIG MOCK July 2024</h2>
            <p className="big-mock-description">
                 Our newest Big Mock is tailored for the upcoming PLAB 1 exam!
            </p>
            <div className='frontmockbtnfooter'>
              <button className="button more-info">More Info</button>
              <button className="button purchase">Purchase</button>
            </div>
        </div>
    </div>
    </div>
  </main>
  </>
  )
}

export default BigMock