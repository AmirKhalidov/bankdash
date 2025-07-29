import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchSettingsData,
  updateEditProfile,
  updatePreferences,
  updateSecurity,
} from "./operations";
import type {
  EditProfileState,
  PreferencesState,
  SecurityState,
  SettingsState,
} from "../types/settingsSliceTypes";

const initialState: SettingsState = {
  editProfile: undefined,
  preferences: undefined,
  security: undefined,
  loading: false,
  error: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettingsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSettingsData.fulfilled,
        (
          state,
          action: PayloadAction<Omit<SettingsState, "loading" | "error">>
        ) => {
          state.loading = false;
          state.editProfile = action.payload.editProfile;
          state.preferences = action.payload.preferences;
          state.security = action.payload.security;
        }
      )
      .addCase(fetchSettingsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch settings";
      })
      .addCase(updateEditProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateEditProfile.fulfilled,
        (state, action: PayloadAction<EditProfileState>) => {
          state.loading = false;
          state.editProfile = action.payload;
        }
      )
      .addCase(updateEditProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update profile";
      })
      .addCase(updatePreferences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updatePreferences.fulfilled,
        (state, action: PayloadAction<PreferencesState>) => {
          state.loading = false;
          state.preferences = action.payload;
        }
      )
      .addCase(updatePreferences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update preferences";
      })
      .addCase(updateSecurity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateSecurity.fulfilled,
        (state, action: PayloadAction<SecurityState>) => {
          state.loading = false;
          state.security = action.payload;
        }
      )
      .addCase(updateSecurity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update security";
      });
  },
});

export default settingsSlice.reducer;
