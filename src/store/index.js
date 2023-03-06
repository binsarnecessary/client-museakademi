import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/AdminSlice";
import authReducer from "./slices/authSlice";
import {adminApi} from "./apis/admin";
import { setupListeners } from '@reduxjs/toolkit/query';;


const store = configureStore({
    reducer: {
      global: globalReducer,
      [adminApi.reducerPath]: adminApi.reducer,
      auth: authReducer,
      
    },
    middleware: (getDefault) => getDefault().concat(adminApi.middleware)
  });
  setupListeners(store.dispatch);

  export default store;