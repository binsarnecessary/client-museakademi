import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/AdminSlice";
import {adminApi} from "./apis/admin";
import { setupListeners } from '@reduxjs/toolkit/query';;

const store = configureStore({
    reducer: {
      global: globalReducer,
      [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(adminApi.middleware)
  });
  setupListeners(store.dispatch);

  export default store;