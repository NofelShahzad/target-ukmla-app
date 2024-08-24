import apiSlice from "../api/apiSlice";

export const mocksApiSlice = apiSlice.injectEndpoints({
    tagType: ["big_mocks"],
    endpoints: (builder) => ({
        getAllMocks: builder.query({
            query: ()=>`/big-mocks`
        }),
        getAllPracticeMocks: builder.query({
            query: ()=>`/practice-mocks`
        }),
        getAllQuesionOfMock: builder.query({
            query: (id)=>`/mocks/${id}`
        }),
        buyMockPlan: builder.mutation({
            query: (body) => ({
                url: `/big-mocks/buy`,
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetAllMocksQuery,
    useGetAllPracticeMocksQuery,
    useGetAllQuesionOfMockQuery,
    useLazyGetAllQuesionOfMockQuery,
    useBuyMockPlanMutation
}= mocksApiSlice;