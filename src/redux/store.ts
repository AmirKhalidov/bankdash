import { configureStore } from "@reduxjs/toolkit";
import creditCardsReducer from "./creditCardsSlice";
import transactionsReducer from "./transactionsSlice";
import settingsReducer from "./settingsSlice";
import loansReducer from "../redux/loanSlice";
import servicesReducer from "../redux/servicesSlice";
import investmentsReducer from "../redux/investmentsSlice";
import trendingReducer from "../redux/trendingSlice";
import uiReducer from "../redux/uiSlice";

export const store = configureStore({
  reducer: {
    creditCards: creditCardsReducer,
    transactions: transactionsReducer,
    settings: settingsReducer,
    loans: loansReducer,
    services: servicesReducer,
    investments: investmentsReducer,
    trending: trendingReducer,
    ui: uiReducer,
  },
});