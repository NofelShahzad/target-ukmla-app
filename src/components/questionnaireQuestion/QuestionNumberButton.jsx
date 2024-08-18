// import React from 'react'
import './QuestionNumberButton.css'
function QuestionNumberButton({number,activeQuestionIndex, handleChangeQuestion, questCountDetails, apiCall}) {
  // console.log("questCountDetails::",questCountDetails)
  // Pending
  // Correct
  // Incorrect
  return (
    <div className="question-index-btn-wrapper">
        <button 
            className={`question-index-btn
            ${  questCountDetails?.slug===activeQuestionIndex?' active-index-btn':''}
                ${questCountDetails?.customer_answer==='Incorrect' ?' wrong-index-btn':''}
                ${questCountDetails?.customer_answer==='Correct'?' correct-index-btn':''}
                ${questCountDetails?.customer_answer==='Removed' ? ' removed-index-btn':''}
                `}
                onClick={()=>handleChangeQuestion(questCountDetails?.slug)}   
              disabled={apiCall} 
            >
            {number}
        </button>
    </div>
  )
}

export default QuestionNumberButton