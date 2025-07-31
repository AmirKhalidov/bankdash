import { configureStore } from "@reduxjs/toolkit";
import creditCardsReducer from "./creditCardsSlice";
import transactionsReducer from "./transactionsSlice";
import settingsReducer from "./settingsSlice";
import loansReducer from "../redux/loanSlice";
import servicesReducer from "../redux/servicesSlice";

export const store = configureStore({
  reducer: {
    creditCards: creditCardsReducer,
    transactions: transactionsReducer,
    settings: settingsReducer,
    loans: loansReducer,
    services: servicesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
