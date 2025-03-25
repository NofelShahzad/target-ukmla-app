import { combineReducers } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";
import authReducer from "./features/auth/authSlice";
import screenshotReducer from "./features/screenshotSlice/screenshotSlice";

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    screenshot: screenshotReducer,
});

export default rootReducer;