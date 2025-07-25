import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CreditCard } from "../types/creditCardsSliceTypes";
import type { Transaction } from "../types/transactionsSliceTypes";
import type {
  EditProfileState,
  PreferencesState,
  SecurityState,
} from "../types/settingsSliceTypes";

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

export const fetchSettingsData = createAsyncThunk(
  "settings/fetchSettingsData",
  async () => {
    const { data } = await axios.get(`http://localhost:3001/user`);
    return {
      editProfile: {
        name: data.name,
        email: data.email,
        username: data.username,
        dob: data.dob,
        addressPermanent: data.address.permanent,
        addressPresent: data.address.present,
        city: data.address.city,
        postalCode: data.address.postalCode,
        country: data.address.country,
        password: data.password,
      },
      preferences: {
        currency: data.settings.currency,
        timezone: data.settings.timezone,
        sendReceive: data.settings.notifications.sendReceive,
        merchantOrder: data.settings.notifications.merchantOrder,
        recommendations: data.settings.notifications.recommendations,
      },
      security: {
        twoFactorAuth: data.settings.security.twoFactorAuth,
        currentPassword: data.settings.security.currentPassword,
        newPassword: data.settings.security.newPassword,
      },
    };
  }
);

export const updateEditProfile = createAsyncThunk(
  "settings/updateEditProfile",
  async (editProfile: EditProfileState) => {
    const { data: currentUser } = await axios.get(`http://localhost:3001/user`);

    const updatedUser = {
      ...currentUser,
      name: editProfile.name,
      email: editProfile.email,
      username: editProfile.username,
      dob: editProfile.dob,
      password: editProfile.password,
      address: {
        permanent: editProfile.addressPermanent,
        present: editProfile.addressPresent,
        city: editProfile.city,
        postalCode: editProfile.postalCode,
        country: editProfile.country,
      },
    };

    const { data } = await axios.put(`http://localhost:3001/user`, updatedUser);

    return {
      ...editProfile,
      ...data,
    };
  }
);

export const updatePreferences = createAsyncThunk(
  "settings/updatePreferences",
  async (preferences: PreferencesState) => {
    const { data: currentUser } = await axios.get(`http://localhost:3001/user`);
    const updatedUser = {
      ...currentUser,
      settings: {
        ...currentUser.settings,
        currency: preferences.currency,
        timezone: preferences.timezone,
        notifications: {
          sendReceive: preferences.sendReceive,
          merchantOrder: preferences.merchantOrder,
          recommendations: preferences.recommendations,
        },
        security: currentUser.settings.security,
      },
    };
    const { data } = await axios.put(`http://localhost:3001/user`, updatedUser);
    return {
      ...preferences,
      ...data.settings,
    };
  }
);

export const updateSecurity = createAsyncThunk(
  "settings/updateSecurity",
  async (security: SecurityState) => {
    const { data: currentUser } = await axios.get(`http://localhost:3001/user`);
    const updatedUser = {
      ...currentUser,
      settings: {
        ...currentUser.settings,
        security: {
          twoFactorAuth: security.twoFactorAuth,
          currentPassword: security.currentPassword,
          newPassword: security.newPassword,
        },
        currency: currentUser.settings.currency,
        timezone: currentUser.settings.timezone,
        notifications: currentUser.settings.notifications,
      },
    };
    const { data } = await axios.put(`http://localhost:3001/user`, updatedUser);
    return {
      ...security,
      ...data.settings.security,
    };
  }
);
