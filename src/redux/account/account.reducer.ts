import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAccountState {
  token: string;
  expiresIn: string;
}

const initialState: IAccountState = {
  token: "",
  expiresIn: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    updateAccount(state: IAccountState, action: PayloadAction<IAccountState>) {
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
    },
    deleteAccount(state: IAccountState) {
      (state.token = ""), (state.expiresIn = "");
    },
  },
});

export const { updateAccount, deleteAccount } = accountSlice.actions;

export const AccountReducer = accountSlice.reducer;
