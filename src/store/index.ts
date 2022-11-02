import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./app";
const store = configureStore({
  reducer: {
    AppReducer,
  },
});

export default store;
