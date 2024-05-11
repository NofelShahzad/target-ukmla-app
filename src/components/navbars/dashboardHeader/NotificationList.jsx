// import React from 'react'

import { Link } from "react-router-dom"
import SingleNotification from "./SingleNotification"

function NotificationList() {
    return (
        <div className='notification-dropdown-inner-wrapper'>
            <div className='notification-header'>
                <h3>Notifications</h3> 
                <Link to='/'>View All</Link>
            </div>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>

        </div>
    )
}

export default NotificationList