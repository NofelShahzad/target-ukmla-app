// import React from 'react'
import moment from 'moment/moment'
import './SinglePostedComment.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function SinglePostedComment({comment,handleReactOnComment,handleDeleteComment}) {
  const [likesDetails,setLikesDetails] = useState({liked:false,likes:0})
  const [dislikesDetails,setDisLikesDetails] = useState({disliked:false,dislikes:0})
 
  const userAuth = useSelector(state=>state.auth);


  useEffect(() => {
    if (comment) {
      setLikesDetails({liked:comment?.liked,likes:comment?.likes});
      setDisLikesDetails({disliked:comment?.disliked,dislikes:comment?.dislikes});
    }
  
  }, [comment])


  const handleReact =(type)=>{
    const body = {
      comment_id : comment?.id,
      is_like : type==="liked",
      is_dislike : type==="disliked"
  }
    handleReactOnComment(body);
  }


  return (
    // <div className="">SinglePostedComment</div>
    <div className="single-posted-comment-card">
      <div className="single-posted-comment-card-header">
        <span className="author">{comment?.customer?.name} {comment?.customer?.last_name} </span>
        <span className="tag">PLAB</span>
      </div>
      <div className="single-posted-comment-card-content">
        <p>
          {comment?.content}
        {/* A 33 year old man presents with outward gaze and ptosis of his right eye. He also complains of seeing double. Which is the SINGLE most likely nerve to be affected? */}
        </p> 
      </div>
      <div className="single-posted-comment-card-footer">
        <span className="time">{moment(comment?.created_at).startOf('day').fromNow()} 
          {/* 3 months ago */}
        </span>
        <div className="likes">
            <button type="button" onClick={()=>handleReact("liked")}>
            <svg fill="#000000" width="19px" height="16px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path strokeWidth={2} stroke={likesDetails?.liked? '#5eb9f0':`#000000`}  d="M1.5 11c-.822 0-1.5.678-1.5 1.5v15c0 .822.678 1.5 1.5 1.5h7c.822 0 1.5-.678 1.5-1.5v-15c0-.822-.678-1.5-1.5-1.5zm0 1h7c.286 0 .5.214.5.5v15c0 .286-.214.5-.5.5h-7c-.286 0-.5-.214-.5-.5v-15c0-.286.214-.5.5-.5zm16-11c-.362 0-.72.04-1.06.19-.338.15-.642.417-.856.78C15.156 2.7 15 3.767 15 5.5c0 3.154-2.27 5.578-3.777 6.584-.53.34.02 1.2.554.832C13.27 11.922 16 9.146 16 5.5c0-1.665.197-2.6.445-3.02.125-.213.242-.307.4-.376.155-.07.37-.104.655-.104.477 0 .748.158 1.03.766.284.608.47 1.678.47 3.234 0 2.977-1.88 6.174-1.88 6.174-.278.324-.048.826.38.826h10c.58 0 .925.148 1.145.375.22.227.355.58.355 1.125 0 .996-.797 1.598-.797 1.598-.273.2-.27.61.006.808 0 0 .79.57.79 1.594 0 1.025-.79 1.594-.79 1.594-.303.218-.27.678.062.85 0 0 .728.343.728 1.306 0 .963-.728 1.307-.728 1.307-.354.183-.362.686-.014.88 0 0 .742.396.742 1.313 0 .46-.164.723-.43.928-.266.204-.662.322-1.07.322h-16c-.677 0-.642 1 0 1h16c.592 0 1.196-.158 1.68-.53.484-.37.82-.983.82-1.72 0-.874-.386-1.397-.746-1.746.362-.347.746-.87.746-1.754 0-.926-.413-1.445-.783-1.783.357-.38.783-.967.783-1.967 0-1.043-.458-1.637-.816-2.002.356-.367.816-.963.816-1.998 0-.717-.193-1.362-.637-1.82-.444-.458-1.1-.68-1.863-.68h-9.086C19.012 11.153 20 8.54 20 6c0-1.63-.17-2.81-.563-3.656C19.044 1.498 18.317 1 17.5 1z"/></svg>
            </button>
          <span>{likesDetails?.likes}</span>
        </div>
        <div className="dislikes">
            <button type="button" onClick={()=>handleReact("disliked")}>
                <svg width="19px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={2} stroke={dislikesDetails?.disliked? '#5eb9f0':`#000000`} strokeLinecap="round" strokeLinejoin="miter"><polygon points="17 15 13 22 10 22 11 15 2 15 4 2 17 2 17 15"></polygon><rect x="17" y="2" width="5" height="13"></rect></svg>
            </button>
          <span>{dislikesDetails?.dislikes}</span>
        </div>
        {userAuth?.user?.id === comment?.customer_id   &&
          <>
            <div className='comment-actions'>
              <button>Edit</button>
            </div>
            <div className='comment-actions'>
              <button className='btn-del-comment' onClick={()=>handleDeleteComment(comment?.id)}>Delete</button>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default SinglePostedComment