import apiSlice from "../api/apiSlice";

export const plansApiSlice = apiSlice.injectEndpoints({
    tagType: ["all_plans","user_plans"],
    endpoints: (builder) => ({
        getUserPlans: builder.query({
            query: () => `/user/plans`,
            providesTags: ["user_plans"],
        }),
        getStandardPlans: builder.query({
            query: () => `/plans`
        }),
        buyStandardPlan: builder.mutation({
            query: (body) => ({
                url: `buy`,
                method: "POST",
                body
            }),
            invalidatesTags: ["user_plans"],
        })
    })
})

export const {
    useGetUserPlansQuery,
    useGetStandardPlansQuery,
    useBuyStandardPlanMutation,
}=plansApiSlice;