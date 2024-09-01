import apiSlice from "../api/apiSlice";

export const practiceApiSlice = apiSlice.injectEndpoints({
    tagType: ["practice_mocks"],
    endpoints: (builder)=>({
        allPracticeMocks: builder.query({
            query: ()=> `practice-mocks`
        })
    })

})

export const {
    useAllPracticeMocksQuery
} = practiceApiSlice;

