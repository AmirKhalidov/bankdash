import { configureStore } from "@reduxjs/toolkit";
import creditCardsSlice from "./creditCardsSlice";
import transactionsReducer from "./transactionsSlice";

export const store = configureStore({
  reducer: {
    creditCards: creditCardsSlice,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
