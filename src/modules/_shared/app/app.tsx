import { getDirection, getLocale } from "modules/_shared/app-store/selectors";
import { ErrorBoundary, Loader } from "modules/_shared/components";
import i18n from "modules/_shared/i18n/i18n";
import { useAppSelector } from "modules/_shared/root-store/hooks";
import RootRoute from "modules/_shared/router/rootRoute";
import basicTheme from "modules/_shared/theme/basic.json";
import { App as AntDApp, ConfigProvider } from "modules/_shared/ui";
import { FC, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import styles from "./app.module.css";

export const App: FC = () => {
  const locale = useAppSelector(getLocale);
  const direction = useAppSelector(getDirection);

  return (
    <Suspense fallback={<Loader />}>
      <ConfigProvider locale={locale} direction={direction} theme={basicTheme}>
        <I18nextProvider i18n={i18n}>
          <AntDApp className={styles.app}>
            <BrowserRouter>
              <ErrorBoundary>
                <RootRoute />
              </ErrorBoundary>
            </BrowserRouter>
          </AntDApp>
        </I18nextProvider>
      </ConfigProvider>
    </Suspense>
  );
};
