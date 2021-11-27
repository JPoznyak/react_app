import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "./components/Routes";
import { persistor, store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router />
      </PersistGate>
    </Provider>
  );
};