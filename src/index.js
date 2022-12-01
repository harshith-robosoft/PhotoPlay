import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import store from "./features/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./Features/store";
let persistor = persistStore(store);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
