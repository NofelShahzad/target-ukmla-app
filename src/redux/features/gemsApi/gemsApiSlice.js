import apiSlice from "../api/apiSlice";

export const gemsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllGems: builder.query({
            query: ()=> `gems`
        }),
        getSingleGem: builder.query({
            query: (id) => `gems/details/${id}`
        }),
    })
})

export const {
    useGetAllGemsQuery,
    useLazyGetSingleGemQuery,
} = gemsApiSlice;