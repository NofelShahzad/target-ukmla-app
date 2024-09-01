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
import WebinarsInfo from '../../components/modals/WebinarsInfo';
// import img from '../../assets/images/dashboard/webinars/babies.png'
function Webinars() {

    const [detailModal, setDetailModal] = useState(false);
    // const [webinarDetail,setWebinarDetail] = useState();
    const [confirmPurchaseModal, setConfirmPurchaseModal] = useState(false);
    const [purchaseId, setPurchaseId] = useState(null);

    const handleWebinarModal = () => {
        setDetailModal(prev => !prev);
    }
    const handleConfirmPurchase = (purchaseWebinar) => {
        setConfirmPurchaseModal(true);
        setPurchaseId(purchaseWebinar);
    }

    const handlePurchaseWebinar = () => {

    }


    return (
        <>
            <div className='container-fluid'>
                <div className='page-title-container'>
                    <h2 className="title">Webinars</h2>
                    <p>Text explaining what these are.</p>
                </div>

                <section className='webinars-wrapper'>
                    <div className='webinars-inner-wrapper'>
                        <WebinarsCard imgSrc={babiesImg} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={lastMintRev} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={ogEssential} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={ecg} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={babiesImg} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={lastMintRev} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={ogEssential} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={ecg} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                    </div>
                </section>
            </div>
            {detailModal &&
                <ReactPortal wrapperId="external_modal_container">
                    <WebinarsInfo closeBtn={closeBtn} handleWebinarModal={handleWebinarModal} />
                </ReactPortal>
            }

            {confirmPurchaseModal &&
                <ReactPortal wrapperId="external_modal_container">
                    <section className='detail-modal'>
                        <div className='close-btn-container'>
                            <img src={closeBtn} alt='close' onClick={() => setConfirmPurchaseModal(false)} />
                        </div>
                        <div className='title-wrapper'>
                            <h2 className='title'>{purchaseId?.name}</h2>
                            {/* <div className='date-time-wrapper'><span>18th May 2024 (9:00 AM to 11:00 AM UK time)</span></div> */}
                        </div>
                        <div className='description'>
                            <p className="text-balance">Are you sure you want to purchase <strong>{purchaseId?.name}</strong> mock exam <br /> for <strong>£{purchaseId?.price}</strong>?</p>
                        </div>
                        <div className="modal-footer-custom">
                            <button className="btn btn-primary mb-2" onClick={() => handlePurchaseWebinar()}>Yes</button>
                            <button className="btn btn-secondary" onClick={() => setConfirmPurchaseModal(false)}>No</button>
                        </div>
                    </section>
                </ReactPortal>
            }



        </>
    )
}

export default Webinars

// const AuthenticatedDashboard = withAuth(Webinars);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;