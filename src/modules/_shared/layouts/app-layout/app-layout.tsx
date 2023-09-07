import CloseIcon from "assets/icons/close.svg";
import MenuIcon from "assets/icons/hamburger-menu.svg";
import logo from "assets/images/logo.png";
import { getIsMobile } from "modules/_shared/app-store/selectors";
import { AppHeader, Navigation } from "modules/_shared/components";
import { useAppSelector } from "modules/_shared/root-store/hooks";
import { Content, Header, Layout, Sider } from "modules/_shared/ui";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import styles from "./app-layout.module.css";
import { useMobileNavigation } from "./use-mobile-navigation";

export const AppLayout = () => {
  const isMobile = useAppSelector(getIsMobile);

  const { showNavigation, toggleShowNavigation } = useMobileNavigation();

  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        theme="light"
        width={isMobile ? "100%" : 250}
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
      <Layout>
        <Header className={styles.header}>
          {isMobile && !showNavigation && (
            <button className={styles.btn} onClick={toggleShowNavigation}>
              <MenuIcon />
            </button>
          )}
          <AppHeader />
        </Header>
        <Content className={styles.content}>
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};
