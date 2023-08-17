import { Spin } from 'modules/_shared/ui';

import styles from './loader.module.css';

export const Loader = () => {
  return <Spin className={styles.loader} size='large' />;
};
