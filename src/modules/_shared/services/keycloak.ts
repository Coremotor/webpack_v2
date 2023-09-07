import Keycloak from "keycloak-js";
import { TKeycloakAuthStatus } from "modules/_shared/services/types";

import { keycloakClientId, keycloakRealm, keycloakUrl } from "../config/env";

const _kc = new Keycloak({
  url: keycloakUrl,
  realm: keycloakRealm,
  clientId: keycloakClientId,
});

export const initKeycloak = async (
  renderApp: (status: TKeycloakAuthStatus) => void,
) => {
  try {
    const authenticated = await _kc.init({
      onLoad: "login-required",
    });

    if (authenticated) {
      renderApp("authenticated");
    } else {
      renderApp("no-authenticated");
    }
  } catch (error) {
    renderApp("error");
  }
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const token = () => _kc.token;

const isLogged = () => !!_kc.token;

const hasRole = (roles: string[]) =>
  roles.some((role) => _kc.hasRealmRole(role));

export const keycloakClient = {
  doLogin,
  doLogout,
  token,
  isLogged,
  hasRole,
};
