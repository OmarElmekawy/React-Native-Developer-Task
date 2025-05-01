import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import eventsReducer from "./eventsSlice";

export default configureStore({
  reducer: {
    loginRed: loginReducer,
    eventsRed: eventsReducer,
  },
});
