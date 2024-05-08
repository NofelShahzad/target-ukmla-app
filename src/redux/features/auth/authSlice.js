import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
  
    reducers: {
      setAuth: (state, { payload }) => {
        state.user = payload;
      },
      logoutUser: (state) => {
        state.user = null;
      },
    },
  })
  export const { setAuth, logoutUser } = authSlice.actions;

  export default authSlice.reducer