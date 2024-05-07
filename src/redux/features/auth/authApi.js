import apiSlice from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body) => ({
                url: "login_user",
                method: "POST",
                body,
              }),
        }),

       

    }),
    overrideExisting: true,
})

export const {
   useLoginUserMutation,
} = authApi; 