// import React from 'react'

import BigmocksCard from "../../components/bigmocksCard/BigmocksCard";
import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";
import april from '../../assets/images/dashboard/bigmocks/april.webp'
import october from '../../assets/images/dashboard/bigmocks/october.webp'
import january from '../../assets/images/dashboard/bigmocks/january.webp'
import july from '../../assets/images/dashboard/bigmocks/july.webp'
import may from '../../assets/images/dashboard/bigmocks/may.webp'
import { useEffect, useState } from "react";
import ReactPortal from "../../components/portal/ReactPortal";

import closeBtn from '../../assets/icons/dashboard/modal-close.svg'
import BigmockInfo from "../../components/modals/BigmockInfo";
import { useGetAllMocksQuery } from "../../redux/features/mocks/MocksApiSlice";
import { errorMessage } from "../../components/toastMessages/ToastifyMsg";



// import
function BigMocks() {
  const [detailModal, setDetailModal] = useState(false);
    const [bigMockDetail,setbigMockDetail] = useState();
    const [allMocks,setAllMocks] = useState([]);
    const {data,error} = useGetAllMocksQuery();
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
      if (data) {
        // console.log("data::",data)
        if (data?.status) {
          setAllMocks(data?.mocks);
          setIsLoading(false);
        }
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
        
      } catch (err) {
        console.log("err::",err);
      }
    }
  return (
    <>
      <div className="container-fluid">
        <div className='page-title-container'>
          <h2 className="title">Big Mock</h2>
          <p>Text explaining what these are.</p>
        </div>

        <section className="bigmocks-wrapper pb-3">
          <div className="bigmocks-inner-wrapper">
              {allMocks.length >0 &&
                  allMocks.map(mock=>
                    <BigmocksCard key={mock?.slug} imgSrc={april} mockDetail={mock} handleBigmockModal={handleBigmockModal}/>
                  )
              }
              {
                !allMocks.length >0 && !isLoading &&
                <div className="no-mocks-found">
                  <p>No big mocks found.</p>
                </div>
              }
              

              {/* <BigmocksCard imgSrc={october} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={january} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={july} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={may} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={april} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={october} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={january} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={july} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={may} handleBigmockModal={handleBigmockModal}/> */}

          </div>
        </section>
      </div>
      {detailModal &&
        <ReactPortal wrapperId="external_modal_container">
          <BigmockInfo closeBtn={closeBtn} bigMockDetail={bigMockDetail} closeModal={handleCloseBigmockModal}/>
        </ReactPortal>

      }
    </>
  )
}

export default BigMocks

// const AuthenticatedDashboard = withAuth(BigMocks);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;