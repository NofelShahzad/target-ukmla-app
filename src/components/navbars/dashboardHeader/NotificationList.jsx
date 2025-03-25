// import React from 'react'

import { Link } from "react-router-dom"
import SingleNotification from "./SingleNotification"
import { useGetAllNotificationsQuery } from "../../../redux/features/notifications/notificationApiSlice"
import { useEffect, useState } from "react"

function NotificationList() {
    const [allNotifications,setAllNotifications] = useState([]);

    const { data, error } = useGetAllNotificationsQuery();
    useEffect(() => {
        if (data) {
            // console.log("data::",data)
            if (data?.status) {
                setAllNotifications(data?.notifications);
            }
            if (!data?.status) {
                setAllNotifications([])
            }
        }
    }, [data,error])
    return (
        <div className='notification-dropdown-inner-wrapper'>
            <div className='notification-header'>
                <h3>News & Notifications</h3> 
                <Link to='/notifications'>View All</Link>
            </div>
            {allNotifications?.length >0 &&
                allNotifications?.map(notification=>
                    <SingleNotification key={notification?.id} notificationData={notification}/>
                )
            }
            {allNotifications?.length ===0 &&
                <div className="emtpy-mg-container"><p>No New and notificaton.</p></div>
            }
            {/* <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/> */}

        </div>
    )
}

export default NotificationList