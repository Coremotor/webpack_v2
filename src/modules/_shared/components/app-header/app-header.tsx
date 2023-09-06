import { LocaleSwitcher } from "modules/_shared/components/locale-switcher/locale-switcher";
import { mode } from "modules/_shared/config/env";
import { logout } from "modules/_shared/services/keycloak";
import { Button, Space, Text } from "modules/_shared/ui";

import styles from "./app-header.module.css";

export const AppHeader = () => {
  return (
    <div className={styles.header}>
      <Text type="secondary">mode: {mode}</Text>
      <Space>
        <LocaleSwitcher />
        <Button danger onClick={() => logout()}>
          Logout
        </Button>
      </Space>
    </div>
  );
};
