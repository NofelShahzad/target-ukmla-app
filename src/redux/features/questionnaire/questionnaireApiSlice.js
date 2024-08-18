import apiSlice from "../api/apiSlice";

export const questionnaireApiSlice = apiSlice.injectEndpoints({
    tagType: ["update_question_count","all_marked_questions"],
    endpoints: (builder) => ({
        allQuestionsCategories: builder.query({
            query: () => `/categories`
        }),
        getAllQuestionsOfCat: builder.query({
            query: (catId) => `/categories/${catId}`,
            providesTags:["update_question_count"]
        }),
        getSingleQuestion: builder.query({
            query: (questionId) => `/question/${questionId}`
        }),
        questionAnswer: builder.mutation({
            query: (body)=>({
                url: `question/answer-now`,
                method: 'POST',
                body
            }),
            invalidatesTags: ["update_question_count"],
        }),
        markFlag: builder.mutation({
            query: (body) => ({
                url: `questions/mark-as-flagged`,
                method: 'POST',
                body
                }),
                invalidatesTags: ["all_marked_questions"],
        }),
        getAlMarkedQuestions: builder.query({
            query: () => `/questions/flagged`,
            providesTags: ["all_marked_questions"]
        }),
    })
})

export const {
    useAllQuestionsCategoriesQuery,
    useGetAllQuestionsOfCatQuery,
    useLazyGetSingleQuestionQuery,
    useQuestionAnswerMutation,
    useMarkFlagMutation,
    useGetAlMarkedQuestionsQuery,
} = questionnaireApiSlice;