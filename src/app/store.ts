import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { useDispatch } from "react-redux";
import { AccountReducer } from "@/redux";

const accountPersistConfig = {
  key: "account",
  storage: storage,
};
const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  account: persistReducer(accountPersistConfig, AccountReducer),
});

const persistedReducer = persistReducer(persistConfig, reducers);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const store: any = configureStore({
  reducer: persistedReducer,
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
export const useAppDispatch = () => useDispatch<IAppDispatch>();
