// import React from 'react'

import moment from "moment/moment"
import { Link } from "react-router-dom"

function SingleNotification({notificationData}) {
  return (
    <div className='single-notification'>
            <div className="single-notification-body"> 
                <span><Link to={`/notifications/${notificationData?.id}`}>{notificationData?.title}</Link></span> 
                {/* Commented on question <Link> G1 1249</Link>  */}
            </div>
            <div className="single-notification-time">
                {/* 3 hours ago */}
                {moment(notificationData?.created_at).startOf('day').fromNow()}
            </div>
            {/* <div className="single-notification-body"> 
                <span>Mohammad</span> Commented on question <Link>G1 1249</Link> 
            </div>
            <div className="single-notification-time">
                3 hours ago
            </div> */}
    </div>
  )
}

export default SingleNotification