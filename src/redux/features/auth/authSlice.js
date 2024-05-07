import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const authSlice = createSlice({
    name: "auth",
    initialState,
  
    reducers: {
      setUser: (state, { payload }) => {
        state.user = payload;
      },
      logoutUser: (state) => {
        state.user = null;
      },
    },
  })
  export const { setUser, logoutUser } = authSlice.actions;

  export default authSlice.reducer