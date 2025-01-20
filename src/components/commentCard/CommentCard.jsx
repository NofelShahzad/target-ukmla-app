// import React from 'react'
import moment from 'moment/moment'
import './CommentCard.css'
function CommentCard({content,userInfo}) {
  return (
    <>
    <div className="comment-card-wrapper">
        <div className="comment-card-inner-wrapper">
            <div className="name-container">
                    <h2 className="title">{userInfo?.name} 
                      {/* {userInfo?.last_name} */}
                      </h2>
            </div>
            <div className="comment-body">
                <p>{content?.content}</p>
                    {/* <p>Radial Nerve (C5 - T1) damages are frequently asked. The radial nerve can be damaged anywhere in its ourse.</p> */}
            </div>
            <div className="timestamp">
                <span>{moment(content?.updated_at).startOf('day').fromNow()}</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommentCard