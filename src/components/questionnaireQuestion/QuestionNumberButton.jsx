// import React from 'react'
import './QuestionNumberButton.css'
// eslint-disable-next-line react/prop-types
function QuestionNumberButton({number,activeQuestionIndex, handleChangeQuestion}) {
  return (
    <div className="question-index-btn-wrapper">
        <button 
            className={`question-index-btn
            ${  number===activeQuestionIndex?' active-index-btn':''}
                ${number===6|| number ===  19||number ===  37|| number ===  4||number ===  7|| number ===  5||number ===  1 ?' wrong-index-btn':''}
                ${number === 8|| number ===  9||number ===  7 || number ===  10||number ===  11 || number ===  12||number ===  13 || number ===  14||number ===  15|| number ===  16||number ===  17|| number ===  19||number ===  18?' correct-index-btn':''}
                ${number === 93|| number ===  29||number ===  57 ? ' removed-index-btn':''}
                `}
                onClick={()=>handleChangeQuestion(number)}    
            >
            {number}
        </button>
    </div>
  )
}

export default QuestionNumberButton