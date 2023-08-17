import type { MenuProps } from 'antd';
import { Menu } from 'modules/_shared/ui';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './navigation.module.css';
import { useNavItems } from './use-nav-items';

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const navItems = useNavItems(currentRoute);

  const handleNavItemClick: MenuProps['onClick'] = (navItem) => {
    setCurrentRoute(navItem.key);
    navigate(navItem.key);
  };

  return (
    <Menu
      className={styles.menu}
      onClick={handleNavItemClick}
      selectedKeys={[currentRoute]}
      items={navItems}
    />
  );
};
