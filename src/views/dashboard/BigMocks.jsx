// import React from 'react'

import BigmocksCard from "../../components/bigmocksCard/BigmocksCard";
import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";
import april from '../../assets/images/dashboard/bigmocks/april.webp'
import october from '../../assets/images/dashboard/bigmocks/october.webp'
import january from '../../assets/images/dashboard/bigmocks/january.webp'
import july from '../../assets/images/dashboard/bigmocks/july.webp'
import may from '../../assets/images/dashboard/bigmocks/may.webp'
import { useState } from "react";
import ReactPortal from "../../components/portal/ReactPortal";

import closeBtn from '../../assets/icons/dashboard/modal-close.svg'
import BigmockInfo from "../../components/modals/BigmockInfo";



// import
function BigMocks() {
  const [detailModal, setDetailModal] = useState(false);
    // const [bigmockDetail,setbigmockDetail] = useState();

    const handleBigmockModal = () => {
        setDetailModal(prev => !prev);
    }
  return (
    <>
      <div className="container-fluid">
        <div className='page-title-container'>
          <h2 className="title">Big Mock</h2>
          <p>Text explaining what these are.</p>
        </div>

        <section className="bigmocks-wrapper">
          <div className="bigmocks-inner-wrapper">
              <BigmocksCard imgSrc={april} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={october} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={january} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={july} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={may} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={april} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={october} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={january} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={july} handleBigmockModal={handleBigmockModal}/>
              <BigmocksCard imgSrc={may} handleBigmockModal={handleBigmockModal}/>

          </div>
        </section>
      </div>
      {detailModal &&
        <ReactPortal wrapperId="external_modal_container">
          <BigmockInfo closeBtn={closeBtn} closeModal={handleBigmockModal}/>
        </ReactPortal>

      }
    </>
  )
}

export default BigMocks

// const AuthenticatedDashboard = withAuth(BigMocks);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;