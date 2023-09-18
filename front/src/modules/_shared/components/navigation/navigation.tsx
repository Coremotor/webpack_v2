import type { MenuProps } from "antd";
import { useNavItems } from "modules/_shared/components/navigation/use-nav-items";
import { Menu } from "modules/_shared/ui";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./navigation.module.css";

type TNavigationProps = {
  toggleShowNavigation: () => void;
  isMobile: boolean;
};

export const Navigation: FC<TNavigationProps> = ({
  toggleShowNavigation,
  isMobile,
}) => {
  const navigate = useNavigate();

  const { items } = useNavItems();

  const handleNavItemClick: MenuProps["onClick"] = (navItem) => {
    navigate(navItem.key);
    if (isMobile) toggleShowNavigation();
  };

  const currentRoute = window.location.pathname;

  return (
    <Menu
      className={styles.menu}
      onClick={handleNavItemClick}
      selectedKeys={[currentRoute]}
      items={items}
    />
  );
};
