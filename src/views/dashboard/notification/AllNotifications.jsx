// import React from 'react'

import { useEffect, useState } from "react";
import { useGetAllNotificationsQuery } from "../../../redux/features/notifications/notificationApiSlice";
import SingleNotification from "../../../components/navbars/dashboardHeader/SingleNotification";
import './AllNotifications.css'
function AllNotifications() {
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
       
            <div className="container-fluid">
                <div className='page-title-container'>
                    <h2 className="title">News & Notifications</h2>
                    <p>Text explaining what these are.</p>
                </div>
                <div className="notification-list">

                {allNotifications?.length >0 &&
                allNotifications?.map(notification=>
                    <SingleNotification key={notification?.id} notificationData={notification}/>
                )
            }

                </div>
            </div>
    
    
    )
}

export default AllNotifications