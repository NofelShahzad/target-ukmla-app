import apiSlice from "../api/apiSlice";
export const commentsApiSlice = apiSlice.injectEndpoints({
    tagType: ["all_comments"],
    endpoints: (builder) => ({
        getAllComments: builder.query({
            query: () => `/comments`,
            providesTags: ["all_comments"],
        }),
        addComment: builder.mutation({
            query: (body) => ({
                url: `/comments`,
                method: "POST",
                body
            }),
            invalidatesTags: ["all_comments"],
        }),
        updateComment: builder.mutation({
            query: (body) => ({
                url: `/comments/update`,
                method: "POST",
                body
            }),
            invalidatesTags: ["all_comments"],
        }),
        likeDislikeComment: builder.mutation({
            query: (body) => ({
                url: `/comments/like-dislike`,
                method: 'POST',
                body
            }),
        })

    })
})
export const {
    useAddCommentMutation,
    useGetAllCommentsQuery,
    useUpdateCommentMutation, 
    useLikeDislikeCommentMutation
} = commentsApiSlice;