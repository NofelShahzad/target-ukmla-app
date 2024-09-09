import apiSlice from "../api/apiSlice";

export const mocksApiSlice = apiSlice.injectEndpoints({
    tagType: ["big_mocks","mock_all_quesion_count"],
    endpoints: (builder) => ({
        getAllMocks: builder.query({
            query: ()=>`/big-mocks`,
            providesTags:["big_mocks"]
        }),
        getAllPracticeMocks: builder.query({
            query: ()=>`/practice-mocks`
        }),
        getAllQuesionOfMock: builder.query({
            query: (id)=>`/mocks/${id}`,
            providesTags:["mock_all_quesion_count","update_question_count"]
        }),
        buyMockPlan: builder.mutation({
            query: (body) => ({
                url: `/big-mocks/buy`,
                method: 'POST',
                body
            }),
            invalidatesTags: ["big_mocks"],
        }),
        resetMock: builder.mutation({
            query: (body) => ({
                url: `mocks/reset-mock`,
                method: 'POST',
                body
            }),
        }),
        getSingleMock: builder.query({
            query: (id) => `/mock/${id}`
        }),
        startMockTimer: builder.mutation({
            query: (body) => ({
                url: `/mock/start-mock`,
                method: 'POST',
                body
            }),
        }), 
        finishMockTimer: builder.mutation({
            query: (body) => ({
                url: `/mock/finish-mock`,
                method: 'POST',
                body
            }),
        }), 
        mockTimeChecker: builder.mutation({
            query: (body) => ({
                url: `/mock/playing-mock`,
                method: 'POST',
                body
            }),
        }), 
    })
})

export const {
    useGetAllMocksQuery,
    useGetAllPracticeMocksQuery,
    useGetAllQuesionOfMockQuery,
    useLazyGetAllQuesionOfMockQuery,
    useBuyMockPlanMutation,
    useResetMockMutation,
    useGetSingleMockQuery,
    useStartMockTimerMutation,
    useFinishMockTimerMutation,
    useMockTimeCheckerMutation,
}= mocksApiSlice;