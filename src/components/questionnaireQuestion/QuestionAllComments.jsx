// import React from 'react'
import './QuestionAllComments.css'
import SinglePostedComment from './SinglePostedComment'

const commentsNumbers = Array.from({ length: 5 }, (_, i) => i + 1);

function QuestionAllComments({handleReactOnComment,allComments}) {
  return (
    <>

      <div className="question-all-comments">
        <div className="question-comment-header"><h2 className='comments-title'>Comments</h2></div>
        <div className="question-comment-body">
          <div className="question-comment-inner-body">

            { allComments.length >0 && allComments.map(comment => (<SinglePostedComment handleReactOnComment={handleReactOnComment} key={comment?.id} comment={comment}/>))}
            {!allComments?.length && <div className='empty-comment-msg'><p>No Comments.</p></div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionAllComments