// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BigmocksCard.css'
import emptyImage from '../../assets/empty-images/no-image.png'
import { VITE_REACT_APP_BASE_URL } from '../../config';

// eslint-disable-next-line react/prop-types
function BigmocksCard({handleBigmockModal,mockDetail}) {
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
                              <img src={mockDetail?.icon? `${VITE_REACT_APP_BASE_URL}/${mockDetail?.icon}`:emptyImage}/>
                          </div>
                          <div className="bigmocks-card-body">
                              <div className="card-title-wrapper">
                                  <h2 className="title">{mockDetail?.name} </h2>
                              </div>
                              <div className="description">
                            <p>{mockDetail?.description} </p>
                              </div>
                              <div className="bigmocks-card-footer">
                                <div className='col-6 pe-1'> 
                                  <button type='button' className='btn btn-detail' onClick={()=>handleBigmockModal(mockDetail)}>More Info</button>
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