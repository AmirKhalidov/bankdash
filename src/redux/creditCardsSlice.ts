import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCreditCardData } from "./operations";
import type {
  CreditCard,
  CreditCardsState,
} from "../types/creditCardsSliceTypes";

const initialState: CreditCardsState = {
  cards: [],
  loading: false,
  error: null,
};

const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreditCardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCreditCardData.fulfilled,
        (state, action: PayloadAction<CreditCard[]>) => {
          state.loading = false;
          state.cards = action.payload;
        }
      )
      .addCase(fetchCreditCardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch credit cards";
      });
  },
});

export default creditCardsSlice.reducer;
