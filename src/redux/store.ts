import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import creditCardsReducer from "./creditCardsSlice";
import transactionsReducer from "./transactionsSlice";
import settingsReducer from "./settingsSlice";

export const store = configureStore({
  reducer: {
    creditCards: creditCardsReducer,
    transactions: transactionsReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
