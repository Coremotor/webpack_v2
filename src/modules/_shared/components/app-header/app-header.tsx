import { LocaleSwitcher } from "modules/_shared/components/locale-switcher/locale-switcher";
import { mode } from "modules/_shared/config/env";
import { Text } from "modules/_shared/ui";

import styles from "./app-header.module.css";

export const AppHeader = () => {
  return (
    <div className={styles.header}>
      <Text type="secondary">mode: {mode}</Text>
      <LocaleSwitcher />
    </div>
  );
};
