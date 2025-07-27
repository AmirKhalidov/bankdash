import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  getUser: async () => {
    const response = await apiClient.get(`/user`);
    return response.data;
  },

  getServices: async () => {
    const response = await apiClient.get("/user");
    return response.data.services;
  },
  getLoans: async () => {
    const response = await apiClient.get("/user");
    return response.data.loans;
  },
};

export const fetchLoans = createAsyncThunk("loans/fetchLoans", async () => {
  const data = await api.getLoans();
  return data;
});
