import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getAllUniversitiesByNameSlice from "../slice/getData.js";

export const store = configureStore({
  reducer: {
    getData: getAllUniversitiesByNameSlice,
  },
  middleware: [thunk],
});
