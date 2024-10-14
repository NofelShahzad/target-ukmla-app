import apiSlice from "../api/apiSlice";

export const plansApiSlice = apiSlice.injectEndpoints({
    tagType: ["all_plans"],
    endpoints: (builder) => ({
        getUserPlans: builder.query({
            query: () => `/user/plans`
        }),
        getStandardPlans: builder.query({
            query: () => `/plans`
        }),
        buyStandardPlan: builder.mutation({
            query: (body) => ({
                url: `buy`,
                method: "POST",
                body
            })
        })
    })
})

export const {
    useGetUserPlansQuery,
    useGetStandardPlansQuery,
    useBuyStandardPlanMutation,
}=plansApiSlice;