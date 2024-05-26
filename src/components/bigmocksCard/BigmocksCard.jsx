// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BigmocksCard.css'

// eslint-disable-next-line react/prop-types
function BigmocksCard({imgSrc,handleBigmockModal}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`detail/3252`);
  }
  
  return (
    <>
        <div className="col-sm-12 col-xl-6 col-12">
                <div className="bigmocks-card">
                      <div className="bigmocks-inner-card">
                          <div className="bigmocks-img">
                              <img src={imgSrc}/>
                          </div>
                          <div className="bigmocks-card-body">
                              <div className="card-title-wrapper">
                                  <h2 className="title">Big Mock - April 2024</h2>
                              </div>
                              <div className="description">
                            <p>Our newest Big Mock, tailored for the upcoming PLAB exam, is now available to attempt.</p>
                              </div>
                              <div className="bigmocks-card-footer">
                                <div className='col-6 pe-1'> 
                                  <button type='button' className='btn btn-detail' onClick={()=>handleBigmockModal()}>More Info</button>
                                </div>
                                <div className='col-6 ps-1'>
                                  <button type='button' className='btn btn-primary' onClickCapture={()=>handleNavigate()}>Pruchase</button>
                                </div>
                              </div>
                          </div>
                      </div>
                </div>
        </div>
    </>
  )
}

export default BigmocksCard