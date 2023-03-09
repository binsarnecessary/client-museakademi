import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  creds: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    addUser: (state, action) => {
      state.creds = action.payload.user;
      state.token = action.payload.token;
    },
    removeUser: (state, action) => {
      state.creds = "";
      state.token = "";
    },
  },
});

export const { login, logout, addUser, removeUser } = authSlice.actions;
export const selectUser = (state) => state.user;

export default authSlice.reducer;
