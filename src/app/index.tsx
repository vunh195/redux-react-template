import { Provider as ProviderRedux } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";
import { ComponentGetReduxState } from "@/components";
import { ComponentUpdateReduxState } from "@/components/index2";

const persistor = persistStore(store);

export const App = () => {
  return (
    <ProviderRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ComponentGetReduxState />
        <ComponentUpdateReduxState />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>KHOA LOZ </h1>
      </PersistGate>
    </ProviderRedux>
  );
};
