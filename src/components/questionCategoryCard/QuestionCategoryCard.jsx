// import React from 'react'

import { Link } from "react-router-dom"
import QuestionCardStautsInfo from "./QuestionCardStautsInfo"
import { VITE_REACT_APP_BASE_URL } from "../../config"

// eslint-disable-next-line react/prop-types
function QuestionCategoryCard({  title,questionData }) {
    // console.log("questionData::",questionData)
    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2 col-12">
                <div className="single-question-card">
                    <div className="single-question-header">
                        <div className="img-container">
                            <img src={`${VITE_REACT_APP_BASE_URL}/${questionData?.icon}`} alt={`${title} image`} />
                            {/* <svg id="Group_60" data-name="Group 60" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="55" height="55" viewBox="0 0 55 55">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_477" data-name="Rectangle 477" width="55" height="55" fill="none" stroke="#012f46" strokeWidth="1" />
                                    </clipPath>
                                </defs>
                                <g id="Group_59" data-name="Group 59" clipPath="url(#clip-path)">
                                    <path id="Path_14" data-name="Path 14" d="M30.6,6.829a9.981,9.981,0,0,1,15.74,8.151s0,19.477-8.974,30.908a2.446,2.446,0,0,1-3.889.084,62.992,62.992,0,0,1-6.6-11.9.782.782,0,0,0-1.425,0,62.113,62.113,0,0,1-6.717,11.9,2.43,2.43,0,0,1-3.821.018C9.287,38.876,6.68,30.468,5.473,24.2" transform="translate(6.601 6.03)" fill="none" stroke="#012f46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    <path id="Path_15" data-name="Path 15" d="M13,3.173A14.349,14.349,0,0,1,23.992,16.027" transform="translate(15.675 3.827)" fill="none" stroke="#012f46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    <path id="Path_16" data-name="Path 16" d="M14.845,31.659c2.57-2.157,12.409-11.37,12.627-26.19a1.02,1.02,0,0,0-.413-.832C25.774,3.687,21.5,1,14.236,1S2.7,3.687,1.413,4.638A1.02,1.02,0,0,0,1,5.469c.218,14.82,10.057,24.032,12.627,26.19A.942.942,0,0,0,14.845,31.659Z" transform="translate(1.206 1.206)" fill="none" stroke="#012f46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    <path id="Path_17" data-name="Path 17" d="M5,11.618l2.206,2.206L16.03,5" transform="translate(6.03 6.03)" fill="none" stroke="#012f46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </g>
                            </svg> */}
                        </div>
                        <h2>{questionData?.name}</h2>
                    </div>
                    <div className="single-question-body">
                        {/* <QuestionCardStautsInfo type={'correct'} percentage={ (questionData?.correct_answers_count/questionData?.published_questions_count)*100} />
                        <QuestionCardStautsInfo type={'wrong'} percentage={(questionData?.wrong_answers_count/questionData?.published_questions_count)*100} />
                        <QuestionCardStautsInfo type={'not-attempt'} percentage={(((questionData?.published_questions_count-(questionData?.correct_answers_count+questionData?.wrong_answers_count)/questionData?.published_questions_count))/questionData?.published_questions_count)*100} />
                        <QuestionCardStautsInfo type={'removed-by-admin'} percentage={'0'} /> */}
                        <QuestionCardStautsInfo type={'correct'} percentage={(questionData?.correct_answers_count / questionData?.published_questions_count) * 100} />
                        <QuestionCardStautsInfo type={'wrong'} percentage={(questionData?.wrong_answers_count / questionData?.published_questions_count) * 100} />
                        <QuestionCardStautsInfo type={'not-attempt'} percentage={((questionData?.published_questions_count - (questionData?.correct_answers_count + questionData?.wrong_answers_count)) / questionData?.published_questions_count) * 100} />
                        <QuestionCardStautsInfo type={'removed-by-admin'} percentage={0} />

                    </div>
                    <div className="single-question-footer">
                        <Link to={`/${questionData?.slug}/${questionData?.question?.slug}`}>View Details</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default QuestionCategoryCard