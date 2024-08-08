import apiSlice from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        
        registerUser: builder.mutation({
            query: (body)=>({
                url: `/register`,
                method: 'POST',
                body
            })
        }),

        loginUser: builder.mutation({
            query: (body) => ({
                url: `login`,
                method: "POST",
                body,
              }),
        }),

       

    }),
    overrideExisting: true,
})

export const {
   useLoginUserMutation,
   useRegisterUserMutation
} = authApi; 