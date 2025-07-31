import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Investment } from "./investmentsSlice";

interface UIState {
  selectedInvestment: Investment | null;
}

const initialState: UIState = {
  selectedInvestment: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    selectInvestment: (state, action: PayloadAction<Investment>) => {
      state.selectedInvestment = action.payload;
    },
    clearSelectedInvestment: (state) => {
      state.selectedInvestment = null;
    },
  },
});

export const { selectInvestment, clearSelectedInvestment } = uiSlice.actions;
export default uiSlice.reducer;
