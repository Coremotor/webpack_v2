import CloseIcon from "assets/icons/close.svg";
import MenuIcon from "assets/icons/hamburger-menu.svg";
import logo from "assets/images/logo.png";
import classNames from "classnames";
import { getIsLoading, getIsMobile } from "modules/_shared/app/store/selectors";
import { AppHeader, Loader, Navigation } from "modules/_shared/components";
import { useAppSelector } from "modules/_shared/root-store/hooks";
import { Content, Header, Layout, Sider } from "modules/_shared/ui";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import styles from "./app-layout.module.css";
import { useMobileNavigation } from "./use-mobile-navigation";

export const AppLayout = () => {
  const isMobile = useAppSelector(getIsMobile);
  const isLoading = useAppSelector(getIsLoading);

  const { showNavigation, toggleShowNavigation } = useMobileNavigation();

  return (
    <Layout className={styles.layout}>
      <Sider
        className={classNames(styles.sider, {
          [styles["mobile-sider"]]: isMobile,
        })}
        theme="light"
        width={250}
        collapsedWidth="0"
        collapsible
        trigger={null}
        collapsed={!showNavigation}
      >
        <header className={styles["sider-header"]}>
          <img className={styles.logo} src={logo} alt="Comfort booking" />

          {isMobile && showNavigation && (
            <button className={styles.btn} onClick={toggleShowNavigation}>
              <CloseIcon />
            </button>
          )}
        </header>
        <Navigation
          toggleShowNavigation={toggleShowNavigation}
          isMobile={isMobile}
        />
      </Sider>
      <Layout
        onClick={showNavigation && isMobile ? toggleShowNavigation : null}
      >
        <Header className={styles.header}>
          {isMobile && !showNavigation && (
            <button className={styles.btn} onClick={toggleShowNavigation}>
              <MenuIcon />
            </button>
          )}
          <AppHeader />
        </Header>
        <Content className={styles.content}>
          {isLoading && <Loader />}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};
