// import React from 'react'

import QuestionCategoryCard from "../../components/questionCategoryCard/QuestionCategoryCard";
import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";

import anesthesiology from '../../assets/icons/dashboard/anesthesiology-icon.svg';
import anatomy from '../../assets/icons/dashboard/anatomy-icon.svg';
import ent from '../../assets/icons/dashboard/ent-icon.svg';
import criticalCare from '../../assets/icons/dashboard/critical-care-icon.svg';
import breastSurgery from '../../assets/icons/dashboard/breast-surgery-icon.svg';
import dermatology from '../../assets/icons/dashboard/dermatology-icon.svg';
import { useEffect, useState } from "react";
import { useAllQuestionsCategoriesQuery } from "../../redux/features/questionnaire/questionnaireApiSlice";
// import ReactPortal from "../../components/portal/ReactPortal";



function Dashboard() {

  const [allQuestions,setAllQuestions] = useState([]);

  const {data,error} = useAllQuestionsCategoriesQuery();

  useEffect(() => {
  if (data) {
    // console.log(data)
    if (data?.status) {
      setAllQuestions(data?.categories);
    }
    }
    if (error) {
      console.log("error::",error);
    }
    }, [data,error])


  return (
    <>
    <div className="container-fluid">
      <section className="dashboard-wrapper-banner">
        <div className="dashboard-banner">
          <div className="banner-content">
              <h3 className="banner-title">The Big Mock (April 2024)</h3>
              <p>180 High Yield Questions (Now available for purchase!)</p>

          </div>

        </div>
      </section>

      <section className="type-info-wrapper">
          <div className="single-info"><div className="type correct"></div> <div className="info-title"><span> Correct answers </span></div> </div>
          <div className="single-info"><div className="type wrong"></div> <div className="info-title"><span> Wrong answers </span></div> </div>
          <div className="single-info"><div className="type not-attempt"></div> <div className="info-title"><span> Not attempted yet</span></div> </div>
          <div className="single-info"><div className="type removed-by-admin"></div> <div className="info-title"><span> Removed by the admin</span></div> </div>
      </section>

      <section className="question-categories-wrapper">
        <div className="question-categories-inner-wrapper">
            {allQuestions.map(quest=> (
              <QuestionCategoryCard key={quest?.id} questionData={quest} />
            ))

            }
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
        </div>
      </section>
    </div>
      {/* <ReactPortal wrapperId="external_modal_container">
            <h3 className="text-light">Back Drop</h3>
      </ReactPortal> */}
    </>
  )
}
// const AuthenticatedDashboard = withAuth(Dashboard);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;
// export default withLayout(withAuth(Dashboard));
export default Dashboard