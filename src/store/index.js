import { configureStore } from "@reduxjs/toolkit";
import holidaysReducer from "./holidaysSlice";
import imgReducer from "./imgSlice";
import textReducer from "./textSlice";

export const store = configureStore({
  reducer: {
    holidays: holidaysReducer,
    text: textReducer,
    image: imgReducer,
  }
});