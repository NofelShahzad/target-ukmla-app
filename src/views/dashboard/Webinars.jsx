// import React from 'react'
import WebinarsCard from '../../components/webinarsCard/WebinarsCard';
// import withAuth from '../../components/withAuth/withAuth';
// import withLayout from '../../components/withAuth/withLayout';
// import lastMintRev from '../../assets/images/dashboard/webinars/last-mint-revision.webp'
// import ogEssential from '../../assets/images/dashboard/webinars/o&g-essential.webp'
// import ecg from '../../assets/images/dashboard/webinars/ecg.webp'
import babiesImg from '../../assets/images/dashboard/webinars/babies.webp'
import closeBtn from '../../assets/icons/dashboard/modal-close.svg'
import ReactPortal from '../../components/portal/ReactPortal';
import { useState } from 'react';
import WebinarsInfo from '../../components/modals/WebinarsInfo';
import { useAllWebinarsQuery, 
    // useBuyWebinarMutation 
} from '../../redux/features/webinar/webinarsApiSlice';
import { useEffect } from 'react';
// import img from '../../assets/images/dashboard/webinars/babies.png'
import { errorMessage, 
    // successMessage 
} from "../../components/toastMessages/ToastifyMsg";
import moment from "moment/moment";
import PageLoader from '../../components/pageLoader/PageLoader';

function Webinars() {
    const [isLoading,setIsLoading] = useState(true);
    const [allWebinars,setAllWebinars] = useState([]);
    const [detailModal, setDetailModal] = useState(false);
    const [webinarDetail,setWebinarDetail] = useState();
    const [confirmPurchaseModal, setConfirmPurchaseModal] = useState(false);
    const [purchaseId, setPurchaseId] = useState(null);

    const {data, error } = useAllWebinarsQuery();

    // const [buyWebinar] = useBuyWebinarMutation();
    const [isPurchasing,setIsPurchasing] = useState({
        id: null,
        loading: false,
      });

    useEffect(() => {
        try {
            if (data) {
                if (data?.status) {
                    // console.log("data::",data);
                    setAllWebinars(data?.webinars);
                }
                if (!data?.status) {
                    errorMessage(data?.message)
                }
                setIsLoading(false);
            }
            if (error) {
                console.log("error::",error);
                errorMessage(error?.data?.message);
            }
        } catch (err) {
            console.log("err::",err)
        }
    }, [data, error])

    const handleOpenWebinarModal = (singleWebinar) => {
        setDetailModal(true);
        setWebinarDetail(singleWebinar);
    }
    const handleCloseWebinarModal = () => {
        setDetailModal(false);
    }
    const handleConfirmPurchase = (purchaseWebinar) => {
        setConfirmPurchaseModal(true);
        setPurchaseId(purchaseWebinar);

        // console.log("purchaseWebinar::",purchaseWebinar)
    }

    const handlePurchaseWebinar = async() => {
        try {
            setIsPurchasing({
                id:purchaseId?.id,
                loading:true,
              })
              setConfirmPurchaseModal(false);
              window.open(purchaseId?.link, '_self');
            // const body = {webinar_id: purchaseId?.id}
            // const {data, error} = await buyWebinar(body);
            // if (data) {
            //     if (data?.status) {
            //         successMessage(data?.message);
            //     }
            //     if (!data?.status) {
            //         errorMessage(data?.message);
            //     }
            //     setIsPurchasing({
            //         id:null,
            //         loading: false,
            //       })
            // }
            // if (error) {
            //     console.log("error:",error);
            //     errorMessage(error?.data?.message);
            //     setIsPurchasing({
            //         id:null,
            //         loading: false,
            //       })
            // }
        } catch (err) {
            console.log("err::",err);
        }
    }


    return (
        <>
        {isLoading && <PageLoader/>  }
            <div className='container-fluid'>
                <div className='page-title-container'>
                    <h2 className="title">Webinars</h2>
                    {/* <p>Text explaining what these are.</p> */}
                </div>

                <section className='webinars-wrapper'>
                    <div className='webinars-inner-wrapper'>
                        {
                            allWebinars?.map(webinar=>
                                <WebinarsCard key={webinar?.id} imgSrc={babiesImg} 
                                webinar={webinar} 
                                handleOpenWebinarModal={handleOpenWebinarModal} 
                                handleConfirmPurchase={handleConfirmPurchase} 
                                isPurchasing={isPurchasing}
                                />
                            )
                        }
                        
                        
                        {/* <WebinarsCard imgSrc={lastMintRev} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={ogEssential} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={ecg} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={babiesImg} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={lastMintRev} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={ogEssential} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} />
                        <WebinarsCard imgSrc={ecg} handleWebinarModal={handleWebinarModal} handleConfirmPurchase={handleConfirmPurchase} /> */}
                    </div>
                </section>
            </div>
            {detailModal &&
                <ReactPortal wrapperId="external_modal_container">
                    <WebinarsInfo closeBtn={closeBtn} webinarDetail={webinarDetail} handleCloseWebinarModal={handleCloseWebinarModal} handleOpenWebinarModal={handleOpenWebinarModal} />
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
                            <p className="text-balance mb-2">Are you sure you want to register in webinar of speaker<br />  <strong>{purchaseId?.speaker}</strong> at {moment(purchaseId?.webinar_start_at).format('ll') } for <strong>£{purchaseId?.price}</strong>?</p>
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