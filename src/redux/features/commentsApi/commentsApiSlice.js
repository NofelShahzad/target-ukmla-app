import apiSlice from "../api/apiSlice";
export const commentsApiSlice = apiSlice.injectEndpoints({
    tagType: ["all_comments"],
    endpoints: (builder) => ({
        getAllComments: builder.query({
            query: ({question_id}) => `/comments?question_id=${question_id}`,
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
            invalidatesTags: ["all_comments"],
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["all_comments"],
        }),

    })
})
export const {
    useAddCommentMutation,
    useGetAllCommentsQuery,
    useUpdateCommentMutation, 
    useLikeDislikeCommentMutation,
    useDeleteCommentMutation,
} = commentsApiSlice;