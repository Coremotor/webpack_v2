import { FC, ReactNode } from "react";

import styles from "./authorization-layout.module.css";

type TAuthorizationLayoutProps = {
  children: ReactNode;
};

export const AuthorizationLayout: FC<TAuthorizationLayoutProps> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
