// import React from 'react'

// eslint-disable-next-line react/prop-types
function QuestionCardStautsInfo({type,percentage}) {
  return (
    <div className="question-status-info">
        <div className="question-status"><div className={`question-inner-status ${type}`} style={{'width':`${percentage}%`}}></div></div>
        <div className="question-numbers"><span>{percentage}</span></div>
    </div>
  )
}

export default QuestionCardStautsInfo