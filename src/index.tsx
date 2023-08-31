import "assets/fonts/Gilroy-Regular.woff";
import "assets/fonts/Gilroy-Medium.woff";
import "assets/styles/global.css";
import "assets/styles/colors.css";
import "assets/styles/fonts.css";
import "assets/styles/scroll.css";

import { App } from "modules/_shared/app/app";
import { store } from "modules/_shared/root-store/store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const root = document.getElementById("app");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
}
