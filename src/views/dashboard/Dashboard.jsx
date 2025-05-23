// import React from 'react'

import QuestionCategoryCard from "../../components/questionCategoryCard/QuestionCategoryCard";
// import withAuth from "../../components/withAuth/withAuth";
// import withLayout from "../../components/withAuth/withLayout";

// import anesthesiology from '../../assets/icons/dashboard/anesthesiology-icon.svg';
// import anatomy from '../../assets/icons/dashboard/anatomy-icon.svg';
// import ent from '../../assets/icons/dashboard/ent-icon.svg';
// import criticalCare from '../../assets/icons/dashboard/critical-care-icon.svg';
// import breastSurgery from '../../assets/icons/dashboard/breast-surgery-icon.svg';
// import dermatology from '../../assets/icons/dashboard/dermatology-icon.svg';
import { useCallback, useEffect, useState } from "react";
import { useAllQuestionsCategoriesQuery, useResetQuestionsCategoryMutation } from "../../redux/features/questionnaire/questionnaireApiSlice";
import { useSelector } from "react-redux";
import { useBuyStandardPlanMutation, useGetStandardPlansQuery } from "../../redux/features/plansApi/plansApiSlice";
import { errorMessage, successMessage } from "../../components/toastMessages/ToastifyMsg";
import ReactPortal from "../../components/portal/ReactPortal";
import ExtendPlans from "../../components/modals/ExtendPlans";
// import closeBtn from '../../assets/icons/dashboard/modal-close.svg'
import closeBtn from '../../assets/icons/dashboard/modal-close.svg'
import PageLoader from "../../components/pageLoader/PageLoader";
// import ReactPortal from "../../components/portal/ReactPortal";



function Dashboard() {
  const [isLoading,setIsloading] = useState(true);
  const auth = useSelector(state=>state.auth);
  const [plansModal, setPlansModal] = useState(false);

    const handleClosePlansModal = useCallback(() => {
        setPlansModal(false)
    }, []);
    const handleOpenPlansModal = useCallback(() => {
        setPlansModal(true)
    }, []);
  // console.log("auth::",auth)
  const [allQuestions,setAllQuestions] = useState([]);
  const [allQuestionsType,setAllQuestionsTypes] = useState([]);
  const [allStandardPlans,setAllStandardPlans] = useState([]);

  const {data:plansData , error: plansError} = useGetStandardPlansQuery(undefined,{
    skip: auth?.plan_info !==null
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

  const {data,error} = useAllQuestionsCategoriesQuery();

  useEffect(() => {
  if (data) {
    // console.log(data)
    if (data?.status) {
      setAllQuestions(data?.categories);
      setAllQuestionsTypes(data?.types);
    }
    setIsloading(false)
    }
    if (error) {
      console.log("error::",error);
    }
    }, [data,error])

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
              handleClosePlansModal();
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
    const [resetConfirmModal,setResetConfirmModal] = useState(false);
    const [singleQuestionCat,setSingleQuestionCat] = useState(null);

    const [resetQuestionsCategory] = useResetQuestionsCategoryMutation();

    const handleResetConfirmModal = (singleQuestion)=>{
      // console.log("singleQuestion::",singleQuestion)
      setResetConfirmModal(true);
      setSingleQuestionCat(singleQuestion);
    }

    const handleCloseResetConfirmModal = ()=>{
      setResetConfirmModal(false);
      setSingleQuestionCat(null);
    }

    const handleSubmitResetQuestionnaire = async()=>{
      try {
        setIsloading(true);
        handleCloseResetConfirmModal();
        const { data, error } = await resetQuestionsCategory(singleQuestionCat?.id);
        if (data) {
          if (data?.status) {
            successMessage(data?.message);
          }
          if (!data?.status) {
            errorMessage(data?.message);
          }
          setIsloading(false);
        }
        if (error) {
          console.log("error::",error);
          setIsloading(false);
          errorMessage(error?.data?.message);
        }
      } catch (err) {
        console.log("err::",err)
      }
    }


  return (
    <>{isLoading && <PageLoader/>}
    <div className="container-fluid">
      <section className="dashboard-wrapper-banner">
        <div className="dashboard-banner">
          <div className="banner-content">
              <h3 className="banner-title">Question Bank</h3>
              <p>Comprehensive, all systems covered</p>

          </div>

        </div>
      </section>

      <section className="type-info-wrapper">
          <div className="single-info"><div className="type correct"></div> <div className="info-title"><span> Correct answers </span></div> </div>
          <div className="single-info"><div className="type wrong"></div> <div className="info-title"><span> Wrong answers </span></div> </div>
          <div className="single-info"><div className="type not-attempt"></div> <div className="info-title"><span> Not attempted yet</span></div> </div>
          {/* <div className="single-info"><div className="type removed-by-admin"></div> <div className="info-title"><span> Removed by the admin</span></div> </div> */}
      </section>
      <section className="question-categories-wrapper">
        {/* <div> */}
          {allQuestionsType.map((type) =>(
            <>
            {/* {index!==0 &&
              <hr></hr>
            } */}
              <h2 className="cat-title">{type?.name}</h2>
              <div className="question-categories-inner-wrapper">
                {
                  type?.categories?.map(quest=>
                    <QuestionCategoryCard key={quest?.id} questionData={quest} handleResetConfirmModal={handleResetConfirmModal} />
                  )

                }
              </div>
            </>
          ))

          }
        {/* </div> */}
        <div>
          {allQuestions.length>0 && allQuestionsType.length>0 &&
            <h2 className="cat-title">All categories</h2>
          }
          <div className="question-categories-inner-wrapper">

              {allQuestions.map(quest=> (
                <QuestionCategoryCard key={quest?.id} questionData={quest} handleResetConfirmModal={handleResetConfirmModal} />
              ))

              }
            
          </div>
        </div>
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
      {/* <ReactPortal wrapperId="external_modal_container">
            <h3 className="text-light">Back Drop</h3>
      </ReactPortal> */}
      {plansModal &&
        <ReactPortal wrapperId="external_modal_container">
          <ExtendPlans allPlans={allStandardPlans} closeBtn={closeBtn} closeModal={handleClosePlansModal} handlePurchase={handlePurchansePlan} />
        </ReactPortal>
      }
      {resetConfirmModal &&
        <ReactPortal wrapperId="external_modal_container">
          <section className="backdrop-container">
            <section className="detail-modal">
              <div className="close-btn-container">
                <img src={closeBtn} alt="close" onClick={handleCloseResetConfirmModal}/>
              </div>
              <div className="title-wrapper">
                <h2 className="title">{singleQuestionCat?.name}</h2>
              </div>
              <div className="description">
                <p className="text-balance mb-2">Are you sure you want to reset<br /> <strong> {singleQuestionCat?.name}</strong> category?</p>
              </div>
              <div className="modal-footer-custom">
                <button className="btn btn-primary mb-2" onClick={handleSubmitResetQuestionnaire}>Yes</button>
                <button className="btn btn-secondary" onClick={handleCloseResetConfirmModal}>No</button>
              </div>
            </section>
          </section>
        </ReactPortal>
      }
    </>
  )
}
// const AuthenticatedDashboard = withAuth(Dashboard);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;
// export default withLayout(withAuth(Dashboard));
export default Dashboard

  {/* <QuestionCategoryCard imgSrc={anatomy} questionData={{name:'anatomy'}}/> */}
            {/*<QuestionCategoryCard imgSrc={breastSurgery} title={'Breast Surgery'}/>
            <QuestionCategoryCard imgSrc={ent} title={'Ent'}/>
            <QuestionCategoryCard imgSrc={criticalCare} title={'Critical Care'}/>
            <QuestionCategoryCard imgSrc={dermatology} title={'Dermatology'}/>
            <QuestionCategoryCard imgSrc={anesthesiology} title={'anesthesiology'}/>
            <QuestionCategoryCard imgSrc={anatomy} title={'anatomy'}/>
            <QuestionCategoryCard imgSrc={breastSurgery} title={'Breast Surgery'}/>
            <QuestionCategoryCard imgSrc={ent} title={'Ent'}/>
            <QuestionCategoryCard imgSrc={criticalCare} title={'Critical Care'}/>
            <QuestionCategoryCard imgSrc={dermatology} title={'Dermatology'}/> */}