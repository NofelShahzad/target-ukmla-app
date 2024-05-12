// import React from 'react'
import './CommentCard.css'
function CommentCard() {
  return (
    <>
    <div className="comment-card-wrapper">
        <div className="comment-card-inner-wrapper">
            <div className="name-container">
                    <h2 className="title">John Deo</h2>
            </div>
            <div className="comment-body">
                    <p>Radial Nerve (C5 - T1) damages are frequently asked. The radial nerve can be damaged anywhere in its ourse.</p>
            </div>
            <div className="timestamp">
                <span>2 days ago</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommentCard