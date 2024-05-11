// import React from 'react'

import { Link } from "react-router-dom"
import QuestionCardStautsInfo from "./QuestionCardStautsInfo"

// eslint-disable-next-line react/prop-types
function QuestionCategoryCard({imgSrc, title}) {
  return (
    <>
        <div className="col-3">
            <div className="single-question-card">
                <div className="single-question-header">
                    <img src={imgSrc} alt={`${title} image`} />
                    <h2>{title}</h2>
                </div>
                <div className="single-question-body">
                    <QuestionCardStautsInfo type={'correct'} percentage={'80'}/>
                    <QuestionCardStautsInfo type={'wrong'} percentage={'20'}/>
                    <QuestionCardStautsInfo type={'not-attempt'} percentage={'30'}/>
                    <QuestionCardStautsInfo type={'removed-by-admin'} percentage={'02'}/>

                </div>
                <div className="single-question-footer">
                        <Link to={``}>View Details</Link>
                </div>

            </div>
        </div>
    </>
  )
}

export default QuestionCategoryCard