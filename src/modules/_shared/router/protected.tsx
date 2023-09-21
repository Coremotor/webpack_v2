import { keycloakClient } from "modules/_shared/services/keycloak/keycloak";
import { FC, ReactNode } from "react";

type TProtectedProps = {
  children: ReactNode;
};

export const Protected: FC<TProtectedProps> = ({ children }) => {
  if (!keycloakClient.isLogged()) {
    window.location.reload();
    return;
  }

  return children;
};
