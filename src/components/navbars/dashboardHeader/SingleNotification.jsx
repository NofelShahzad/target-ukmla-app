// import React from 'react'

import { Link } from "react-router-dom"

function SingleNotification() {
  return (
    <div className='single-notification'>
            <div className="single-notification-body"> 
                <span>Mohammad</span> Commented on question <Link>G1 1249</Link> 
            </div>
            <div className="single-notification-time">
                3 hours ago
            </div>
    </div>
  )
}

export default SingleNotification