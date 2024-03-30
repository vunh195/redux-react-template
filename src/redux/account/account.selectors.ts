import { IRootState } from "@/app/store";

export const selectAddress = (state: IRootState) => state.account.address;
export const selectToken = (state: IRootState) => state.account?.token;
