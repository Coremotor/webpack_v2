import { RoutesEnum } from "modules/_shared/router/routes";
import { Button, Result } from "modules/_shared/ui";
import styles from "modules/not-found/not-found.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToMainPage = () => navigate(RoutesEnum.MainScreen);

  return (
    <Result
      className={styles.image}
      status="404"
      title="404"
      subTitle={t("noFound.subTitle")}
      extra={
        <Button type="primary" onClick={goToMainPage}>
          {t("noFound.goToMainPage")}
        </Button>
      }
    />
  );
};

export default NotFound;
