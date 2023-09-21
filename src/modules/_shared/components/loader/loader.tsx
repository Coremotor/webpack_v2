import Logo from "assets/images/logo-mini.svg";

import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.img} />
    </div>
  );
};
