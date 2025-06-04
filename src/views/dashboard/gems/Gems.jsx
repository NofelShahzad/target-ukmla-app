import React, { useCallback, useEffect, useState } from 'react'
import { useGetAllGemsQuery, useLazyGetSingleGemQuery } from '../../../redux/features/gemsApi/gemsApiSlice'
import PageLoader from '../../../components/pageLoader/PageLoader';
// import { VITE_REACT_APP_BASE_URL } from '../../../config';
// import babiesImg from '../../../assets/images/dashboard/webinars/babies.webp'
import { Markup } from 'react-render-markup';
import closeBtn from '../../../assets/icons/dashboard/modal-close.svg'
import ReactPortal from '../../../components/portal/ReactPortal'
import { useSelector } from 'react-redux';
import { errorMessage, successMessage } from '../../../components/toastMessages/ToastifyMsg';
import { useBuyStandardPlanMutation, useGetStandardPlansQuery } from '../../../redux/features/plansApi/plansApiSlice';
import ExtendPlans from '../../../components/modals/ExtendPlans';


function Gems() {
    const auth = useSelector(state => state.auth);
    const [plansModal, setPlansModal] = useState(false);
    const [allStandardPlans, setAllStandardPlans] = useState([]);
    
      const handleClosePlansModal = useCallback(() => {
        setPlansModal(false)
      }, []);
      const handleOpenPlansModal = useCallback(() => {
        setPlansModal(true)
      }, []);

        const { data: plansData, error: plansError } = useGetStandardPlansQuery(undefined, {
          skip: auth?.plan_info !== null
        });
      
        useEffect(() => {
          if (plansData) {
            if (plansData?.status) {
              // console.log("plansData::",plansData)
              setAllStandardPlans(plansData.plans)
            }
            if (!plansData.status) {
              setAllStandardPlans([]);
            }
          }
          if (plansError) {
            errorMessage(plansError?.data?.message);
            setAllStandardPlans([])
          }
      
        }, [plansData, plansError])

    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingGem, setIsLoadingGem] = useState(false);
    const [isLoadingMsg, setIsLoadingMsg] = useState("Loading")
    const [allGems, setAllGems] = useState([]);
    const { data, error } = useGetAllGemsQuery();

    useEffect(() => {
        if (data) {
            // console.log("data::", data?.categories);
            if (data?.status) {
                setAllGems(data?.categories);
            }
            if (!data?.status) {
                setAllGems([]);
            }
            setIsLoading(false);
        }
        if (error) {
            console.log("error::", error);
            setIsLoading(false);
        }
    }, [data, error])
    const [detailModal, setDetailModal] = useState(false);
    const [gemDetail, setGemDetail] = useState();

    const [getSingleGem] = useLazyGetSingleGemQuery();


    const handleOpenGemModal = async (gemId) => {
        try {
            setIsLoadingGem(true);
            setIsLoadingMsg("Loading Gem Details");
            const { data, error } = await getSingleGem(gemId);
            if (data) {
                // setGemDetail(data.gem);
                setDetailModal(true);
                // console.log("data::", data)
                if (data?.status) {
                    setGemDetail({ title: data?.gem?.title, description: data?.gem?.description });
                }
                setIsLoadingGem(false);
            }
            if (error) {
                console.log("error::", error);
            }

        } catch (err) {
            console.log("err::", err);
        }
        setDetailModal(true);
    }

    const handleCloseGemModal = () => {
        setDetailModal(false);
    }
 const [buyStandardPlan] = useBuyStandardPlanMutation();

    const handlePurchansePlan = async(plan)=>{
      // console.log("handlePurchansePlan::",plan);
      if (plan?.link.trim()) {
        window.location = plan?.link;
      }else{
        try {
          const body = {
            plan_id: plan?.id,
            days: plan?.days
          }
          const { data, error} = await buyStandardPlan(body);
          if (data) {
            // console.log(data)
            if (data?.status) {
              successMessage(data?.message);
            }
          }
          if (error) {
            errorMessage(error?.data?.message);
          }
        } catch (err) {
          console.log("err::",err)
        }
        
      }
    }


    return (
        <>
            {(isLoading ||isLoadingGem ) && <PageLoader msg={isLoadingMsg} />}
            <div className="container-fluid">
                <div className='page-title-container'>
                    <h2 className="title">Gems</h2>
                    {/* <p>Text explaining what these are.</p> */}
                </div>
                <section className="bigmocks-wrapper">
                        {!isLoading && allGems.length > 0 &&
                            allGems.map(cat =>
                    <div className="bigmocks-inner-wrapper mb-2 gems-wrapper" key={cat?.id}>
                                <>
                                    <h6 className="title col-12">{cat?.name}</h6>
                                    {cat?.gems.map(gem =>
                                        <div key={gem.id} className='col-sm-12 col-md-6 col-xl-4 col-xxl-3 col-12'>
                                            <div className='bigmocks-card'>
                                                <div className='bigmocks-inner-card'>
                                                    {/* <div className='bigmocks-img'>
                                                <img src={gem?.icon ? `${VITE_REACT_APP_BASE_URL}/${gem?.icon ?? babiesImg} ` : babiesImg} alt="gems" />
                                            </div> */}
                                                    <div className='ps-0 bigmocks-card-body'>
                                                        <div className='card-title-wrapper'>
                                                            {/* Babies in PLAB - 11th May 2024 */}
                                                            <h2 className='title text-capitalize'> {gem?.title} </h2>
                                                        </div>
                                                        <div className="description gems-description">
                                                            <Markup markup={gem?.description} />
                                                        </div>
                                                        <div className="bigmocks-card-footer">
                                                            <div className="col-12 pe-1">
                                                                <button onClick={() => handleOpenGemModal(gem?.id)} type="button" className="btn btn-detail">View Gem</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    }
                                </>
                    </div>
                            )
                        }
                    {!isLoading && auth.plan_info && allGems.length === 0 &&
                        <div className="emtpy-mg-container"><p>No Gems found.</p></div>
                    }
                </section>
                {!auth.plan_info &&
                    <section className="buy-plan-container">
                        <h4>You haven&apos;t purchased any plan yet.</h4>
                        <p>Please purchase a plan to start attempting questions.</p>
                        {/* <p>You haven&apos;t purchased any plan. Please buy any plan to start attempting questions.</p> */}
                        <button type="button" className="btn btn-primary" onClick={handleOpenPlansModal}>Buy Plan</button>
                    </section>
                }
            </div>
            {detailModal &&
                <ReactPortal wrapperId="external_modal_container">
                    <>
                    {/* detail-modal detail-modal-lg */}
                        <div className="modal fade d-block show ">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content detail-modal">
                                    <div className='close-btn-container'>
                                        <img src={closeBtn} alt='close' onClick={handleCloseGemModal} />
                                    </div>
                                    <div className='title-wrapper'>
                                        <h2 className='title mb-2'>{gemDetail?.title}</h2>
                                        <div className='description gems-description-modal'>
                                            <Markup markup={gemDetail?.description} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>

                </ReactPortal>
            }
            {plansModal &&
                    <ReactPortal wrapperId="external_modal_container">
                      <ExtendPlans allPlans={allStandardPlans} closeBtn={closeBtn} closeModal={handleClosePlansModal} handlePurchase={handlePurchansePlan} />
                    </ReactPortal>
                  }
        </>
    )
}

export default Gems