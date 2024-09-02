import apiSlice from "../api/apiSlice";

export const webinarsApiSlice = apiSlice.injectEndpoints({
    tagType: ["all_webinars"],
    endpoints: (builder) => ({
        allWebinars: builder.query({
            query: ()=> `/webinars`,
            providesTags: ["all_webinars"]
        }),
        buyWebinar :builder.mutation({
            query: (body) => ({
                url: `/webinars/buy`,
                method: "POST",
                body
            }),
            invalidatesTags: ["all_webinars"],
        })
    })
});

export const {
    useAllWebinarsQuery,
    useBuyWebinarMutation
} = webinarsApiSlice;