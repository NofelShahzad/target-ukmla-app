// import React from 'react'
import flag from '../../assets/icons/dashboard/flag-icon.svg'
import './FlaggedQuestionCard.css'
// eslint-disable-next-line react/prop-types
function FlaggedQuestionCard({handleFlagModal, type,content}) {
  return (
    <>
        <div className="flagged-question-card-wrapper">
            <div className="flagged-question-card-inner-wrapper">
                { type !=='guide name' &&
                <div className="question-code-container">
                    <h2>Question Code</h2>
                    <span>AN 1189</span>
                </div>
}
                <div className="question-body">
                    <h2>{type}</h2>
                    <p>{content}</p>
                </div>
                <div className="flag-action">
                    <button type='button' onClick={()=>handleFlagModal()}><img src={flag} alt='flag img'/> <span>Unmark Flag</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FlaggedQuestionCard