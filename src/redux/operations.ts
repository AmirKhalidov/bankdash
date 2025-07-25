import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CreditCard } from "../types/creditCardsSliceTypes";
import type { Transaction } from "../types/transactionsSliceTypes";

export const fetchCreditCardData = createAsyncThunk(
  "creditCards/fetchCreditCardData",
  async (params?: { id?: number }) => {
    const { data } = await axios.get("http://localhost:3001/cards");

    if (params?.id) {
      return data.filter((card: CreditCard) => Number(card.id) === params?.id);
    }

    return data;
  }
);

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const { data } = await axios.get<Transaction[]>(
      "http://localhost:3001/transactions"
    );
    return data;
  }
);
