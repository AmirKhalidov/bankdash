import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../redux/servicesSlice";
import loansReducer from "../redux/loanSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    loans: loansReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
