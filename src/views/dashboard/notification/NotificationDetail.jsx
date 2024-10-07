import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleNotificationQuery } from '../../../redux/features/notifications/notificationApiSlice';
import { Markup } from 'react-render-markup'
function NotificationDetail() {
    const [notificationDetails, setNotificationDetails] = useState("");
    const { notification_id } = useParams();
    const { data, isLoading, error } = useGetSingleNotificationQuery(notification_id);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            if (data?.status) {
                // console.log("data::", data);
                setNotificationDetails(data?.notification);
            }
            if (!data?.status) {
                navigate(-1);
            }
        }
        if (error) {
            navigate(-1);
            console.log("error::", error)
        }
    }, [data, error])

    return (
        <>
            <div className="container-fluid">
                <div className='page-title-container'>
                    <h2 className="title">{notificationDetails?.title}</h2>
                    <Markup markup={notificationDetails?.description} />
                    {/* <p>Text explaining what these are.</p> */}
                </div>
            </div>
        </>
    )
}

export default NotificationDetail