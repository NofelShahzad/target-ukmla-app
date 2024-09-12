// import React from 'react'
import './QuestionNumberButton.css'
function QuestionNumberButton({ number, activeQuestionIndex, handleChangeQuestion, questCountDetails, apiCall, isTimmerRunning }) {
  // console.log("questCountDetails::", questCountDetails)
  // Pending
  // Correct
  // Incorrect
  return (
    <div className="question-index-btn-wrapper">
      <button
        className={`question-index-btn  ${questCountDetails?.customer_answer === 'Incorrect' ? ' wrong-index-btn' : ''} ${questCountDetails?.customer_answer === 'Correct' ? ' correct-index-btn' : ''} ${questCountDetails?.customer_answer === 'Removed' ? ' removed-index-btn' : ''} ${questCountDetails?.slug === activeQuestionIndex ? ' active-index-btn' : ''} ${questCountDetails?.removed === 1 ? 'removed-index-btn' : ''}`}
        onClick={() => handleChangeQuestion(questCountDetails?.slug)}
        disabled={apiCall || !isTimmerRunning}
      >
        {questCountDetails?.is_flagged_count ===1 &&
          <span className='btn-flagged-question-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16">
              <path id="flag" d="M10,2A2,2,0,0,0,8,0H0V16H1.333V8.667H6.667v.667a2,2,0,0,0,2,2H16V2.667H10ZM1.333,1.333H8A.667.667,0,0,1,8.667,2V7.333H1.333ZM14.667,4v6h-6A.667.667,0,0,1,8,9.333V8.667h2V4Z" />
            </svg>
          </span>
        }
        {number}
      </button>
    </div>
  )
}

export default QuestionNumberButton