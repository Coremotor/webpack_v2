import logo from 'assets/images/logo.png';
import { AppHeader, Navigation } from 'modules/_shared/components';
import { Content, Header, Layout, Sider } from 'modules/_shared/ui';
import { Outlet } from 'react-router-dom';

import styles from './app-layout.module.css';

export const AppLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        theme='light'
        width={250}
        breakpoint='lg'
        collapsedWidth='0'
        collapsible
        trigger={null}
      >
        <img className={styles.logo} src={logo} alt='Comfort booking' />
        <Navigation />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <AppHeader />
        </Header>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
