// import React from 'react'
import { Markup } from 'react-render-markup'
import flag from '../../assets/icons/dashboard/flag-icon.svg'
import './FlaggedQuestionCard.css'
// eslint-disable-next-line react/prop-types
function FlaggedQuestionCard({handleFlagModal, type, flaggedQuestion,index}) {
    // console.log("flaggedQuestion::",flaggedQuestion)
  return (
    <>
        <div className="flagged-question-card-wrapper">
            <div className="flagged-question-card-inner-wrapper">
                { type !=='guide name' &&
                <div className="question-code-container">
                    <h2>Question Code</h2>
                    <span>{index+1}</span>
                </div>
}
                <div className="question-body">
                    <h2>{type}</h2>
                    {/* <p>{content}</p> */}
                    <Markup markup={flaggedQuestion?.title}/>
                    {/* <p>{flaggedQuestion?.title}</p> */}
                </div>
                <div className="flag-action">
                    <button type='button' onClick={()=>handleFlagModal(flaggedQuestion?.id)}><img src={flag} alt='flag img'/> <span>Unmark Flag</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FlaggedQuestionCard