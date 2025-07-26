export interface EditProfileState {
  name: string;
  email: string;
  username: string;
  dob: string;
  addressPermanent: string;
  addressPresent: string;
  city: string;
  postalCode: string;
  country: string;
  password: string;
}

export interface PreferencesState {
  currency: string;
  timezone: string;
  sendReceive: boolean;
  merchantOrder: boolean;
  recommendations: boolean;
}

export interface SecurityState {
  twoFactorAuth: boolean;
  currentPassword: string;
  newPassword: string;
}

export interface SettingsState {
  editProfile?: EditProfileState;
  preferences?: PreferencesState;
  security?: SecurityState;
  loading: boolean;
  error: string | null;
}
