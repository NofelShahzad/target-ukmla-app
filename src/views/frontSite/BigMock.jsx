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
    Featuring 180 high yield questions not found in the Question Bank to ensure you are ready for the PLAB 1 exam and the new UKMLA exam! The BIG MOCKS are valid for 6 months from purchase. They cost £30 for each BIG MOCK. You must log in before purchase but you do not require an active subscription to access the BIG MOCKS.  </p>  
    <p> <strong>Why do the BIG MOCK?</strong></p>
    <p className="big-mock-description">
    The BIG MOCK is catered for when you are close to finishing your preparation. It has a mix of topics that you might find familiar with and topics that you may not have been prepared for at all. This is what you would expect in the PLAB part 1 exam. We have produced the BIG MOCKS to give you a more accurate prediction of your exam marks. It is useful to go through this using a 3-hour timer so that you know the exact time challenge that you may face in the real exam.    </p>
    
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