import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blockedUsers: [], // Array to track blocked users with blockUntil timestamp
};

const screenshotSlice = createSlice({
  name: "screenshot",
  initialState,
  reducers: {
    blockAccount: (state, action) => {
      const { userId, blockUntil } = action.payload;
      const existingUser = state.blockedUsers.find((user) => user.userId === userId);

      if (existingUser) {
        existingUser.blockUntil = blockUntil;
      } else {
        state.blockedUsers.push({ userId, blockUntil });
      }
    },
    unblockAccount: (state, action) => {
      const { userId } = action.payload;
      state.blockedUsers = state.blockedUsers.filter((user) => user.userId !== userId);
    },
  },
});

export const { blockAccount, unblockAccount } = screenshotSlice.actions;
export default screenshotSlice.reducer;
