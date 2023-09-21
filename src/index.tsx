import "assets/fonts/Gilroy-Regular.woff";
import "assets/fonts/Gilroy-Medium.woff";
import "assets/styles/global.css";
import "assets/styles/colors.css";
import "assets/styles/fonts.css";
import "assets/styles/scroll.css";

import { App } from "modules/_shared/app/app";
import { AppNotAuth } from "modules/_shared/components";
import { store } from "modules/_shared/root-store/store";
import { initKeycloak } from "modules/_shared/services/keycloak/keycloak";
import { TKeycloakAuthStatus } from "modules/_shared/services/keycloak/types";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const renderApp = (status: TKeycloakAuthStatus) =>
  createRoot(document.getElementById("app")!).render(
    <StrictMode>
      <Provider store={store}>
        {status === "authenticated" ? <App /> : <AppNotAuth status={status} />}
      </Provider>
    </StrictMode>,
  );

// eslint-disable-next-line no-void
void initKeycloak(renderApp);
