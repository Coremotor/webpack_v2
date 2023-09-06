import "assets/fonts/Gilroy-Regular.woff";
import "assets/fonts/Gilroy-Medium.woff";
import "assets/styles/global.css";
import "assets/styles/colors.css";
import "assets/styles/fonts.css";
import "assets/styles/scroll.css";

import { App } from "modules/_shared/app/app";
import AppError from "modules/_shared/app-error/app-error";
import AppNotAuth from "modules/_shared/app-not-auth/app-not-auth";
import { store } from "modules/_shared/root-store/store";
import { initKeycloak } from "modules/_shared/services/keycloak";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const renderApp = () =>
  createRoot(document.getElementById("app")!).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
const renderAppError = () =>
  createRoot(document.getElementById("app")!).render(
    <StrictMode>
      <AppError />
    </StrictMode>,
  );

const renderNotAuthApp = () =>
  createRoot(document.getElementById("app")!).render(
    <StrictMode>
      <AppNotAuth />
    </StrictMode>,
  );

initKeycloak(renderApp, renderNotAuthApp, renderAppError).then();
