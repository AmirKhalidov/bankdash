import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { api } from "./api_service";

interface Loan {
  id: number;
  loanMoney: number;
  leftToPay: number;
  duration: string;
  interestRate: string;
  installment: string | number;
}

interface LoansState {
  loans: Loan[];
  filteredLoans: Loan[];
  loading: boolean;
  error: string | null;
}

const initialState: LoansState = {
  loans: [],
  filteredLoans: [],
  loading: false,
  error: null,
};

const loansSlice = createSlice({
  name: "loans",
  initialState,
  reducers: {
    filterLoans(state, action: PayloadAction<(loan: Loan) => boolean>) {
      state.filteredLoans = state.loans.filter(action.payload);
    },
    resetFilter(state) {
      state.filteredLoans = state.loans;
    },
    removeLoan(state, action: PayloadAction<number>) {
      state.loans = state.loans.filter((loan) => loan.id !== action.payload);
      state.filteredLoans = state.filteredLoans.filter(
        (loan) => loan.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoans.fulfilled, (state, action) => {
        state.loading = false;
        state.loans = action.payload;
        state.filteredLoans = action.payload;
      })
      .addCase(fetchLoans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error loading loans";
      });
  },
});
export const fetchLoans = createAsyncThunk("loans/fetchLoans", async () => {
  const data = await api.getLoans();
  return data;
});

export const { filterLoans, resetFilter, removeLoan } = loansSlice.actions;
export default loansSlice.reducer;
