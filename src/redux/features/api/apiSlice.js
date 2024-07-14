import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VITE_REACT_APP_API_BASE_URL } from "../../../config";

const baseQuery = fetchBaseQuery({
    // baseUrl: import.meta.env.VITE_REACT_APP_API_BASE_URL,
    baseUrl: VITE_REACT_APP_API_BASE_URL,
    // credentials: true,
    // mode: 'no-cors',
    prepareHeaders: (headers, { getState }) => {
      const stateToken = getState().auth.token;
      // const token = localStorage.getItem("");
  
      // If we have a token set in state, let's assume that we should be passing it.
      if (stateToken) {
        headers.set("Authorization", `Bearer ${stateToken || ""}`);
        
      }
  
      // headers.set('Cross-Origin-Opener-Policy', '*');
      // headers.set("Access-Control-Allow-Credentials", "true");
      // headers.set("X-Requested-With","XMLHttpRequest");
      headers.set('Accept', 'application/json');
      headers.set("Access-Control-Allow-Origin", "https://www.objective-kirch.109-228-49-52.plesk.page");
      headers.set("Access-Control-Request-Method", "*");
       headers.set("Access-Control-Allow-Credentials", "true");
  
      return headers;
    },
  });

  const baseQueryWithSessionCheck = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    // if (result?.data?.message === "Please provide token" || result?.error?.data?.error?.message === "jwt expired") {
    //   api.dispatch(logoutUser());
    // }
    // console.log("baseQueryWithSessionCheck",result )
    return result
  }


  const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithSessionCheck,
    endpoints: () => ({}),
  });
  
  export default apiSlice;