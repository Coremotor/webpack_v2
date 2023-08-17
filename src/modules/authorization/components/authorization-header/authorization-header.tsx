import logo from 'assets/images/logo.png';
import { Title } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';

import styles from './authorization-header.module.css';

export const AuthorizationHeader = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt='Comfort booking' />
      <Title level={3}>{t('authorization.title')}</Title>
    </header>
  );
};
