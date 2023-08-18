import Logo from "assets/icons/travelline.svg";
import { Button, Text } from "modules/_shared/ui";
import { useTranslation } from "react-i18next";

import styles from "./sign-in-with-travelline.module.css";

export const SignInWithTravelline = () => {
  const { t } = useTranslation();

  return (
    <Button size="large" className={styles.button} block>
      <Logo className={styles.logo} />
      <Text>{t("authorization.TLButton")}</Text>
    </Button>
  );
};
