// import React from 'react'
import WebinarsCard from '../../components/webinarsCard/WebinarsCard';
import withAuth from '../../components/withAuth/withAuth';
import withLayout from '../../components/withAuth/withLayout';
import babiesImg from '../../assets/images/dashboard/webinars/babies.webp'
import lastMintRev from '../../assets/images/dashboard/webinars/last-mint-revision.webp'
import ogEssential from '../../assets/images/dashboard/webinars/o&g-essential.webp'
import ecg from '../../assets/images/dashboard/webinars/ecg.webp'
import closeBtn from '../../assets/icons/dashboard/modal-close.svg'
import ReactPortal from '../../components/portal/ReactPortal';
import { useState } from 'react';
// import img from '../../assets/images/dashboard/webinars/babies.png'
function Webinars() {

    const [detailModal,setDetailModal] = useState(false);
    // const [webinarDetail,setWebinarDetail] = useState();

    const handleWebinarModal = () => {
      setDetailModal(prev=>!prev);
    }
    

    return (
        <>
            <div className='container'>
                <div className='page-title-container'>
                    <h2 className="title">Webinars</h2>
                    <p>Text explaining what these are.</p>
                </div>

                <section className='webinars-wrapper'>
                    <div className='webinars-inner-wrapper'>
                        <WebinarsCard imgSrc={babiesImg} handleWebinarModal={handleWebinarModal} />
                        <WebinarsCard imgSrc={lastMintRev} handleWebinarModal={handleWebinarModal} />
                        <WebinarsCard imgSrc={ogEssential} handleWebinarModal={handleWebinarModal} />
                        <WebinarsCard imgSrc={ecg} handleWebinarModal={handleWebinarModal} />
                        <WebinarsCard imgSrc={babiesImg} handleWebinarModal={handleWebinarModal} />
                        <WebinarsCard imgSrc={lastMintRev} handleWebinarModal={handleWebinarModal} />
                        <WebinarsCard imgSrc={ogEssential} handleWebinarModal={handleWebinarModal} />
                        <WebinarsCard imgSrc={ecg} handleWebinarModal={handleWebinarModal} />
                    </div>
                </section>
            </div>
            {detailModal &&
                <ReactPortal wrapperId="external_modal_container">

                    <section className='webinar-detail-modal'>
                            <div className='close-btn-container'>
                                <img src={closeBtn} alt='close' onClick={handleWebinarModal}/>
                            </div>
                    </section>

                </ReactPortal>
            }



        </>
    )
}

// export default Webinars

const AuthenticatedDashboard = withAuth(Webinars);
const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

export default LayoutAuthenticatedDashboard;