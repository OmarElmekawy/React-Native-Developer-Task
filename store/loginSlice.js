import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "../http/http";

export const loginSlice = createSlice({
  name: "login",
  initialState: { loginedIn: null },
  reducers: {
    loginState: (state, actions) => {
      state.loginedIn = actions.payload;
    },
  },
});

export default loginSlice.reducer;

export const loginAction = loginSlice.actions.loginState;
