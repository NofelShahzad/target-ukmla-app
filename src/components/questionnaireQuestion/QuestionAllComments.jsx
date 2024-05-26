// import React from 'react'
import './QuestionAllComments.css'
import SinglePostedComment from './SinglePostedComment'

const commentsNumbers = Array.from({ length: 5 }, (_, i) => i + 1);

function QuestionAllComments() {
  return (
    <>

      <div className="question-all-comments">
        <div className="question-comment-header"><h2 className='comments-title'>Comments</h2></div>
        <div className="question-comment-body">
          <div className="question-comment-inner-body">

            {commentsNumbers.map(comment => (<SinglePostedComment key={comment} />))}
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionAllComments