import apiSlice from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        registerUser: builder.mutation({
            query: (body) => ({
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
        forgetPasswordRequest: builder.mutation({
            query: (body) => ({
                url: `/forget-password-request`,
                method: "POST",
                body
            }),
        }),
        forgetPasswordVerifyPin: builder.mutation({
            query: (body) => ({
                url: `/forget-password-verify-pin`,
                method: "POST",
                body,
                }),
        }),
        addNewPassword: builder.mutation({
            query: (body) => ({
                url: `/add-new-password`,
                method: "POST",
                body
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url:`/logout`,
                method: 'POST'
            })
        }),
        getLoggedInUser: builder.query({
            query: () =>   `user`
        }),
        contactus: builder.mutation({
            query: (body)=>({
                url: `/send-message`,
                method: "POST",
                body
            })
        }),
        updatePassword: builder.mutation({
            query: ({current_password,new_password,new_password_confirmation}) => ({
                url: `/reset-password?current_password=${current_password}&new_password=${new_password}&new_password_confirmation=${new_password_confirmation}`,
                method: "POST",
                // body
                })
                }),


    }),
    overrideExisting: true,
})

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useForgetPasswordRequestMutation,
    useForgetPasswordVerifyPinMutation,
    useAddNewPasswordMutation,
    useLogoutMutation,
    useGetLoggedInUserQuery,
    useContactusMutation,
    useUpdatePasswordMutation
} = authApi; 