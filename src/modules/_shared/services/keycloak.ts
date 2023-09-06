import Keycloak from "keycloak-js";

import { keycloakClientId, keycloakRealm, keycloakUrl } from "../config/env";

const _kc = new Keycloak({
  url: keycloakUrl,
  realm: keycloakRealm,
  clientId: keycloakClientId,
});

export const initKeycloak = async (
  onAuthenticated: () => void,
  onNotAuthenticated: () => void,
  onAuthenticatedError: () => void,
) => {
  try {
    const authenticated = await _kc.init({
      onLoad: "login-required",
    });

    if (authenticated) {
      onAuthenticated();
    } else {
      onNotAuthenticated();
    }
  } catch (error) {
    onAuthenticatedError();
  }
};

export const login = _kc.login;

export const logout = _kc.logout;

export const token = () => _kc.token;

export const isLogged = () => !!_kc.token;

export const getProfile = async () => {
  try {
    return await _kc.loadUserProfile();
  } catch (e) {
    console.log(e);
  }
};

export const hasRole = (roles: string[]) =>
  roles.some((role) => _kc.hasRealmRole(role));
