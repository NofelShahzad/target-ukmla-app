import apiSlice from "../api/apiSlice";

export const commonApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder)=>({
        getContactInfo: builder.query({
            query: ()=>'/contact-us-information'
        })
    })
})

export const {
    useGetContactInfoQuery,
}=commonApiSlice;