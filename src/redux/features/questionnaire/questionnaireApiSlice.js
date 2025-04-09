import apiSlice from "../api/apiSlice";

export const questionnaireApiSlice = apiSlice.injectEndpoints({
    tagType: ["all_marked_questions","all_categories"],
    endpoints: (builder) => ({
        allQuestionsCategories: builder.query({
            query: () => `/categories`,
            providesTags: ["all_categories"]
        }),
        getAllQuestionsOfCat: builder.query({
            query: (catId) => `/categories/${catId}`,
            providesTags:["update_question_count"]
        }),
        getSingleQuestion: builder.query({
            query: ({id,mock_id}) => `/question/${id}/${mock_id}`
        }),
        questionAnswer: builder.mutation({
            query: (body)=>({
                url: `question/answer-now`,
                method: 'POST',
                body
            }),
            invalidatesTags: ["update_question_count","mock_all_quesion_count"],
        }),
        markFlag: builder.mutation({
            query: (body) => ({
                url: `questions/mark-as-flagged`,
                method: 'POST',
                body
            }),
            invalidatesTags: ["all_marked_questions","update_question_count"],
        }),
        getAlMarkedQuestions: builder.query({
            query: () => `/questions/flagged`,
            providesTags: ["all_marked_questions"]
        }),
        resetQuestionsCategory:  builder.mutation({
            query: (id) =>({
                url: `reset-category/${id}`,
                method: "POST"
            }),
            invalidatesTags: ["all_categories"],
        })
    })
})

export const {
    useAllQuestionsCategoriesQuery,
    useGetAllQuestionsOfCatQuery,
    useGetSingleQuestionQuery,
    useLazyGetSingleQuestionQuery,
    useQuestionAnswerMutation,
    useMarkFlagMutation,
    useGetAlMarkedQuestionsQuery,
    useResetQuestionsCategoryMutation
} = questionnaireApiSlice;