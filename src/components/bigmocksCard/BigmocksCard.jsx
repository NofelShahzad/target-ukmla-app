// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BigmocksCard.css'
import emptyImage from '../../assets/empty-images/no-image.png'
import { VITE_REACT_APP_BASE_URL } from '../../config';
import ButtonLoader from '../loaders/ButtonLoader';

import { Markup } from 'react-render-markup'

// eslint-disable-next-line react/prop-types
function BigmocksCard({handleBigmockModal, mockDetail, isPurchasing,type,handleConfirmPurchase}) {
  const navigate = useNavigate();

  // console.log("mockDetail::",mockDetail)
  const handleNavigate = () => {
    if (!mockDetail?.purchase) {
      // handlePurchaseBigMock(mockDetail?.id)
      handleConfirmPurchase(mockDetail)
    }
    if (mockDetail?.purchase) {
      // navigate(`detail/3252`);
      navigate(`/mock/${mockDetail?.slug}`);
    }
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
                              <Markup markup={mockDetail?.description} />
                            {/* <p>{mockDetail?.description} </p> */}
                              </div>
                              <div className="bigmocks-card-footer">
                                <div className='col-6 pe-1'> 
                                  <button type='button' className='btn btn-detail' onClick={()=>handleBigmockModal(mockDetail)}>More Info</button>
                                </div>
                                {type ==="mock" &&
                                  <div className='col-6 ps-1'>
                                    <button type='button' className='btn btn-primary' disabled={(isPurchasing?.id===mockDetail?.id && isPurchasing?.loading) || (mockDetail?.purchase && mockDetail?.published_questions_count <1 )} onClick={()=>handleNavigate()}>{isPurchasing?.id===mockDetail?.id && isPurchasing?.loading ?<ButtonLoader/>:mockDetail?.purchase? <>Questions<span className='fs-small'>({mockDetail?.published_questions_count})</span></> :'Pruchase'}</button>
                                  </div>
                                }
                                {type === "practice" &&
                                  <div className='col-6 ps-1'>
                                    <button type='button' className='btn btn-primary' disabled={(mockDetail?.published_questions_count <1 )}  onClick={()=>navigate(`/practice/${mockDetail?.slug}`)}>Questions<span className='fs-small'>({mockDetail?.published_questions_count})</span></button>
                                  </div>
                                }
                              </div>
                          </div>
                      </div>
                </div>
        </div>
    </>
  )
}

export default BigmocksCard