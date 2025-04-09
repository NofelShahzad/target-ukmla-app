// import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SinglePlan from '../../components/singlePlan/SinglePlan';
// import withAuth from '../../components/withAuth/withAuth'
// import withLayout from '../../components/withAuth/withLayout'
import { useState } from 'react';
import ReactPortal from '../../components/portal/ReactPortal';
import ExtendPlans from '../../components/modals/ExtendPlans';
import closeBtn from '../../assets/icons/dashboard/modal-close.svg'
import SubscriptionDetails from '../../components/subscriptionDetails/SubscriptionDetails';
import { useBuyStandardPlanMutation, useGetStandardPlansQuery, useGetUserPlansQuery } from '../../redux/features/plansApi/plansApiSlice';
import { useEffect } from 'react';
import { errorMessage, successMessage } from '../../components/toastMessages/ToastifyMsg';


function QuestionsBank() {
    // const navigate = useNavigate();
    const [plansModal, setPlansModal] = useState(false);
    const [allUserPlans,setAllUserPlans] = useState([]);

    const [allStandardPlans,setAllStandardPlans] = useState([]);

    const handleClosePlansModal = () => {
        setPlansModal(false);
        setPlanActionType(null);
    };
    const [planActionType,setPlanActionType] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const [selectedPlan,setSelectedPlan] = useState(null);
    const handleShowConfirmModal = (plan)=>{
        setConfirmModal(true);
        setSelectedPlan(plan);
    }
    const handleCloseConfirmModal = ()=>{
        setConfirmModal(false);
    }
    const handleOpenPlansModal = (type) => {
        setPlansModal(true)
        setPlanActionType(type)
    };

    const {data:plansData , error: plansError} = useGetStandardPlansQuery();

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
        //   errorMessage(plansError?.data?.message);
          setAllStandardPlans([])
        }
      
      }, [plansData, plansError])


    const {data:userPlansData, error: userPlansError} = useGetUserPlansQuery();

    useEffect(() => {
    if (userPlansData) {
        if (userPlansData?.status) {
            // console.log("userPlansData::",userPlansData)
            setAllUserPlans(userPlansData?.plans)
        }
        if (!userPlansData?.status) {
            setAllUserPlans([])
        }
    }
    if (userPlansError) {
        console.log("userPlansError:",userPlansError);
    }
        
    }, [userPlansData,userPlansError])

    const [buyStandardPlan] = useBuyStandardPlanMutation();


    const handlePurchansePlan = async()=>{
        // console.log("handlePurchansePlan::",selectedPlan);
        // return;
        if (planActionType === "reset") {
            window.location = selectedPlan?.reset_link;
        }
        if (planActionType === "extend") {
            if (selectedPlan?.link.trim()) {
              window.location = selectedPlan?.link;
            }else{
              try {
                const body = {
                  plan_id: selectedPlan?.id,
                  days: selectedPlan?.days
                }
                const { data, error} = await buyStandardPlan(body);
                if (data) {
                  // console.log(data)
                  if (data?.status) {
                    successMessage(data?.message);
                    handleClosePlansModal();
                  }
                  if (!data?.status) {
                    errorMessage(data?.message);
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
      }

    return (
        <>
            <div className="container-fluid question-bank-page">
                <div className='page-title-container'>
                    <h2 className="title">Hello, UKMLA</h2>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard.</p> */}
                </div>

                <section className='question-bank-wrapper'>
                    <div className='question-bank-inner-wrapper'>
                        <div className='col-lg-6 col-12 pe-lg-2 pe-0'>
                            <div className='my-stuff-wrapper'>
                                <div className='my-stuff-inner-wrapper question-bank-bg'>
                                    <h2 className='title'>My Stuff</h2>
                                    <div className='footer'>
                                        <div className='col-6 p-1'>
                                            <Link to='flagged-questions' className='btn btn-secondary my-1 w-100'>Flagged Questions</Link>
                                        </div>
                                        {/* <div className='col-6 p-1'>
                                            <Link to='flagged-guides' className='btn btn-secondary my-1 w-100'>Flagged Guides</Link>
                                        </div> */}
                                        <div className='col-6 p-1'>
                                            <Link to='comments' className='btn btn-secondary my-1 w-100'>View Comments</Link>
                                        </div>
                                        {/* <div className='col-6 p-1'>
                                            <button className='btn btn-secondary my-1 w-100'>View Notes</button>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                            <div className='high-yield-card-wrapper'>
                                <div className='my-stuff-inner-wrapper question-bank-bg'>
                                    <h2 className='title'>High Yield Cards</h2>
                                    <div className='description'>
                                        <p>
                                            You have yet to subscribe to Plabable Gems. Plabable Gems contain high yield revision notes in a concise and organised manner according to clinical topics to help you maximise learning. The Gems are also packed with clinical drawings, images and mnemonics to make studying more enjoyable.
                                        </p>
                                    </div>
                                    <div className='footer'>
                                        {/* <div className='col-6 p-1'>
                                            <button type='button' className='btn btn-secondary my-1'>Get Gems</button>
                                        </div> */}
                                        <div className='col-12 p-1'>
                                            <Link to="/gems" type='button' className='btn btn-secondary my-1 w-100'>View Gems</Link>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            {/* <div className='revision-course-wrapper'>
                                <div className='my-stuff-inner-wrapper question-bank-bg'>
                                    <h2 className='title'>Revision Course</h2>
                                    <div className='description'>
                                        <p>
                                            Join our online revision courses to approach your exam with confidence.
                                        </p>
                                    </div>
                                    <div className='footer'>
                                        <div className='col-6 p-1'>
                                            <button type='button' className='btn btn-secondary my-1'>Get Gems</button>
                                        </div>
                                        <div className='col-6 p-1'>
                                            <button type='button' className='btn btn-secondary my-1'>View Gems</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className='revision-course-wrapper'>
                                <div className='my-stuff-inner-wrapper question-bank-bg'>
                                    <h2 className='title'>Revision Course</h2>
                                    <div className='description'>
                                        <p>
                                            Join our online revision courses to approach your exam with confidence.
                                        </p>
                                    </div>
                                    <div className='footer'>
                                        <div className='col-12 p-1'>
                                            <button type='button' className='btn btn-secondary my-1'>Get Gems</button>
                                        </div>


                                    </div>
                                </div>
                            </div> */}

                            <div className='big-mock-wrapper'>
                                <div className='my-stuff-inner-wrapper question-bank-bg'>
                                    <h2 className='title'>Big Mock</h2>
                                    <div className='description'>
                                        <p>
                                            Featuring 180 high yield questions not found in the Question Bank to ensure you are ready for the PLAB 1 exam!
                                        </p>
                                    </div>
                                    <div className='footer'>
                                        <div className='col-12 p-1'>
                                            <Link to='/big-mocks' type='button' className='btn btn-secondary my-1 w-100'>View Big Mock</Link>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className='webinars-wrapper'>
                                <div className='my-stuff-inner-wrapper question-bank-bg'>
                                    <h2 className='title'>Webinars</h2>
                                    <div className='description'>
                                        <p>
                                            We offer a range of essential webinars (online live stream revision and challenging exam questions).
                                        </p>
                                    </div>
                                    <div className='footer'>
                                        <div className='col-12 p-1'>
                                            <Link to='/webinars' type='button' className='btn btn-secondary w-100 my-1'>View Webinars</Link>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='plans-wrapper'>
                                <div className="plans-inner-wrapper">
                                    <h2 className="title">Question Bank (Plans)</h2>
                                    {allUserPlans.length >0 &&
                                        allUserPlans.map((plan, index) =>
                                            <SinglePlan key={plan.id} plan={plan} indexCount={index} handleOpenPlansModal={handleOpenPlansModal} planActionType={planActionType}/>
                                    )}
                                    {
                                        !allUserPlans.length > 0 &&
                                        <div className='no-plans-found'>
                                            <p className='text-center'>No plans found. Please purchase a plan to access the Question Bank.</p>
                                        </div>
                                    }
                                    {/* {console.log("allUserPlans::",allUserPlans)} */}
                                    {/* <SinglePlan handleOpenPlansModal={handleOpenPlansModal} status='inactive' /> */}
                                    {/* <SinglePlan status='inactive'/> */}
                                </div>
                            </div>

                            {/* <div className='subscription-details-wrapper'>
                                <div className="subscription-details-inner-wrapper">
                                    <h2 className="title">Subscriptions</h2>
                                    <>
                                        <SubscriptionDetails/>
                                    </>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </section>

            </div>
            {plansModal &&
                <ReactPortal wrapperId="external_modal_container">
                    <ExtendPlans closeBtn={closeBtn} closeModal={handleClosePlansModal} type={planActionType} handlePurchase={handleShowConfirmModal} purchasedPlan={allUserPlans[0]} allPlans={allStandardPlans}/>
                </ReactPortal>
            }

            {confirmModal &&
                <ReactPortal wrapperId="external_modal_container">
                                    <section className='detail-modal'>
                                        <div className='close-btn-container'>
                                            <img src={closeBtn} alt='close' onClick={() => handleCloseConfirmModal()} />
                                        </div>
                                        <div className='title-wrapper'>
                                            <h2 className='title text-warning'>Confirm</h2>
                                            {/* <div className='date-time-wrapper'><span>18th May 2024 (9:00 AM to 11:00 AM UK time)</span></div> */}
                                        </div>
                                        <div className='description'>
                                            <p className="text-balance mb-2">
                                                {planActionType ==="reset" &&
                                                    <>All attempted mock answers, practice mock responses, flagged questions, and comments will be permanently removed.<br/>
                                                        Are you sure you want to reset your account and pay <strong>£{selectedPlan?.price}</strong>?
                                                    </>
                                                }
                                                {planActionType ==="extend" &&
                                                    <>Are you sure you want to extend your plan and pay <strong>£{selectedPlan?.price}</strong>?</>
                                                }
                                            </p>
                                        </div>
                                        <div className="modal-footer-custom">
                                            <button className="btn btn-primary mb-2" onClick={() => handlePurchansePlan()}>Yes, {planActionType ==="reset" &&"Reset"}{planActionType ==="extend"&&"Extend"}</button>
                                            <button className="btn btn-secondary" onClick={() => handleCloseConfirmModal(false)}>No</button>
                                        </div>
                                    </section>
                                </ReactPortal>
            }

        </>
    )
}

export default QuestionsBank

// const AuthenticatedDashboard = withAuth(QuestionsBank);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;