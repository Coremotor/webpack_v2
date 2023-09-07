import { LocaleSwitcher } from "modules/_shared/components/locale-switcher/locale-switcher";
import { dotENVFile, mode } from "modules/_shared/config/env";
import { keycloakClient } from "modules/_shared/services/keycloak";
import { Button, Space, Text } from "modules/_shared/ui";

import styles from "./app-header.module.css";

export const AppHeader = () => {
  const { doLogout } = keycloakClient;

  return (
    <div className={styles.header}>
      <Space>
        <Text code type="secondary">
          mode: {mode}
        </Text>
        <Text code type="secondary">
          .env_file: {dotENVFile}
        </Text>
      </Space>

      <Space>
        <LocaleSwitcher />
        <Button danger onClick={() => doLogout()}>
          Logout
        </Button>
      </Space>
    </div>
  );
};
