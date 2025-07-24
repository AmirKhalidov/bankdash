import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCreditCardData } from "./operations";

export interface CreditCard {
  id: number;
  userId: number;
  cardNumber: string;
  cardType: string;
  cardHolder: string;
  validThru: string;
  balance: number;
  theme: string;
}

export interface CreditCardsState {
  cards: CreditCard[];
  loading: boolean;
  error: string | null;
}

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
