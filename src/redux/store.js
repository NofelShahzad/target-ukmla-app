import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import apiSlice from "./features/api/apiSlice";
import rootReducer from "./rootReducer";

const persistConfig = {
    key: "target-ukmla",
    version: 1,
    storage,
    whitelist: ["auth"], // only auth will be saved
  };


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);