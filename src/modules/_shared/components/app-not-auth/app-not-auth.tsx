import { TKeycloakAuthStatus } from "modules/_shared/services/types";
import { Button, Result } from "modules/_shared/ui";
import { removeAppLoader } from "modules/_shared/utils/remove-app-loader";
import React, { FC, useEffect } from "react";

import styles from "modules/_shared/components/app-not-auth/app-not-auth.module.css";

type TAppNotAuthProps = {
  status: TKeycloakAuthStatus;
};

export const AppNotAuth: FC<TAppNotAuthProps> = ({ status }) => {
  const goToLoginPage = () => window.location.reload();

  useEffect(() => {
    removeAppLoader();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Result
        status={status === "error" ? "error" : "warning"}
        title={
          status === "error"
            ? "Сервис авторизации не доступен. Попробуйте позже..."
            : "Вы не авторизованы, попробуйте позже..."
        }
        extra={
          <Button onClick={goToLoginPage} type="primary">
            Перейти к странице авторизации
          </Button>
        }
      />
    </div>
  );
};
