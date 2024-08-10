import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user:null
// };

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, accessToken: null,  plan_info: null,profile_image_base_path: null },
  
    reducers: {
      setAuth: (state, action) => {
        const { user, token, profile_image_base_path, plans_info } = action.payload;
        state.user = user;
        state.accessToken = token;
        state.profile_image_base_path = profile_image_base_path;
      },
      logoutUser: (state) => {
        state.user = null;
        state.accessToken = null;
        state.profile_image_base_path = null;
      },
    },
  })
  export const { setAuth, logoutUser } = authSlice.actions;

  export default authSlice.reducer