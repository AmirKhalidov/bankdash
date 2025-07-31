import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import creditCardsReducer from "./creditCardsSlice";
import transactionsReducer from "./transactionsSlice";
import settingsReducer from "./settingsSlice";
import investmentsReducer from "./investmentsSlice";
import trendingReducer from "./trendingSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    creditCards: creditCardsReducer,
    transactions: transactionsReducer,
    settings: settingsReducer,
    investments: investmentsReducer,
    trending: trendingReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
