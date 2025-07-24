import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/user";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await axios.get("http://localhost:3001/user");
    return response.data.bankServices;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    bankServices: [] as any[],
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bankServices = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch services";
      });
  },
});

export default servicesSlice.reducer;
