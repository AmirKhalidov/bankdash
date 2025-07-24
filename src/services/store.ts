import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
