// import React from 'react'

import BigmocksCard from "../../components/bigmocksCard/BigmocksCard";
import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";
import april from '../../assets/images/dashboard/bigmocks/april.webp'
// import october from '../../assets/images/dashboard/bigmocks/october.webp'
// import january from '../../assets/images/dashboard/bigmocks/january.webp'
// import july from '../../assets/images/dashboard/bigmocks/july.webp'
// import may from '../../assets/images/dashboard/bigmocks/may.webp'
import { useEffect, useState } from "react";
import ReactPortal from "../../components/portal/ReactPortal";

import closeBtn from '../../assets/icons/dashboard/modal-close.svg';
import BigmockInfo from "../../components/modals/BigmockInfo";
import { useBuyMockPlanMutation, useGetAllMocksQuery } from "../../redux/features/mocks/MocksApiSlice";
import { errorMessage, successMessage } from "../../components/toastMessages/ToastifyMsg";
import PageLoader from "../../components/pageLoader/PageLoader";



// import
function BigMocks() {
  const [detailModal, setDetailModal] = useState(false);
    const [bigMockDetail,setbigMockDetail] = useState();
    const [allMocks,setAllMocks] = useState([]);
    const {data,error} = useGetAllMocksQuery();
    const [isLoading,setIsLoading] = useState(true);
    const [isPurchasing,setIsPurchasing] = useState({
      id: null,
      loading: false,
    });

    const [confirmPurchaseModal,setConfirmPurchaseModal] = useState(false);
    const [purchaseId,setPurchaseId] = useState(null);

    const [buyMockPlan] = useBuyMockPlanMutation();

    useEffect(() => {
      if (data) {
        // console.log("data::",data)
        if (data?.status) {
          const purchased=data?.purchased_mocks?.map(pur=>({...pur,purchase :true}))
          const not_purchased=data?.mocks?.map(pur=>({...pur,purchase :false}))
          setAllMocks([...purchased,...not_purchased]);
        }
        setTimeout(() => { 
          setIsLoading(false);
        }, 100);
      }
      if (error) {
        if (error?.data?.message) {
           errorMessage(error?.data?.message);
        }
      }
    }, [data, error])


    const handleBigmockModal = (detail) => {
        setDetailModal(prev => !prev);
        setbigMockDetail(detail);
    }
    const handleCloseBigmockModal = () => {
        setDetailModal(false);
    }

    const handlePurchaseBigMock = async()=>{
      try {
        // console.log("purchaseId:::",purchaseId)
        setIsPurchasing({
          id:purchaseId?.id,
          loading:true,
        })
        setConfirmPurchaseModal(false);
        window.open(purchaseId?.link, '_self');
        // const body = {
        //   mock_id: purchaseId?.id,
        //   days : 30
        // } 
        // const {data, error} = await buyMockPlan(body);
        // if (data) {
        //   if (data?.status) {
        //     successMessage(data?.message);
        //   }
        //   if (!data?.status) {
        //     errorMessage(data?.message);
        //   }
        //   setIsPurchasing({
        //     id:null,
        //     loading: false,
        //   })
        // }
        // if (error) {
        //   if (error?.data?.message) {
        //       errorMessage(error?.data?.message);
        //     }
        //     setIsPurchasing({
        //       id:null,
        //       loading: false,
        //     })
        // }
      } catch (err) {
        console.log("err::",err);
      }
    }

    const handleConfirmPurchase = (purchaseMock)=>{
      setConfirmPurchaseModal(true);
      setPurchaseId(purchaseMock);
    }
  return (
    <>
    {isLoading && <PageLoader/>  }
      <div className="container-fluid">
        <div className='page-title-container'>
          <h2 className="title">Big Mock</h2>
          {/* <p>Text explaining what these are.</p> */}
        </div>

        <section className="bigmocks-wrapper pb-3">
          <div className="bigmocks-inner-wrapper">
              {allMocks.length >0 &&
                  allMocks.map(mock=>
                    <BigmocksCard key={mock?.slug} 
                      mockDetail={mock} 
                      handleBigmockModal={handleBigmockModal} 
                      handlePurchaseBigMock={handlePurchaseBigMock} 
                      isPurchasing={isPurchasing}
                      type={"mock"}
                      handleConfirmPurchase={handleConfirmPurchase}
                      />
                  )
              }
              

          </div>
              {!isLoading && allMocks.length === 0 &&
                        <div className="emtpy-mg-container"><p>No big mocks found.</p></div>
                    }
              {/* {
                !allMocks.length >0 && !isLoading &&
                <div className="emtpy-mg-container">
                    <p>No big mocks found.</p>
                </div>
              } */}
        </section>
      </div>
      {detailModal &&
        <ReactPortal wrapperId="external_modal_container">
          <BigmockInfo closeBtn={closeBtn} bigMockDetail={bigMockDetail} closeModal={handleCloseBigmockModal}/>
        </ReactPortal>

      }
  
      {confirmPurchaseModal &&
        <ReactPortal wrapperId="external_modal_container">
        <section className='detail-modal'>
          <div className='close-btn-container'>
            <img src={closeBtn} alt='close'  onClick={()=>setConfirmPurchaseModal(false)}/>
          </div>
          <div className='title-wrapper'>
            <h2 className='title'>{purchaseId?.name}</h2>
            {/* <div className='date-time-wrapper'><span>18th May 2024 (9:00 AM to 11:00 AM UK time)</span></div> */}
          </div>
          <div className='description'>
            <p className="text-balance">Are you sure you want to purchase <strong>{purchaseId?.name}</strong> mock exam <br/> for <strong>£{purchaseId?.price}</strong>?</p>
          </div>
          <div className="modal-footer-custom">
            <button className="btn btn-primary mb-2" onClick={()=>handlePurchaseBigMock()}>Yes</button>
            <button className="btn btn-secondary" onClick={()=>setConfirmPurchaseModal(false)}>No</button>
          </div>
        </section>
        </ReactPortal>
      }
    </>
  )
}

export default BigMocks

// const AuthenticatedDashboard = withAuth(BigMocks);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;