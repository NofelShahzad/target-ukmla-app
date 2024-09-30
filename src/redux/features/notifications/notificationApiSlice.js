import apiSlice from "../api/apiSlice";


export const notificationApiSlice = apiSlice.injectEndpoints({
    tagType: ["all_notification"],
    endpoints: (builder) => ({ 
        getAllNotifications: builder.query({
            query: () => `/notifications`,
            providesTags: ["all_notification"],
        }),
        getSingleNotification: builder.query({
            query: (id) => `/notifications/${id}`,
            invalidatesTags:["all_notification"]
        })
    })
})
export const { 
    useGetAllNotificationsQuery,
    useGetSingleNotificationQuery
} = notificationApiSlice;