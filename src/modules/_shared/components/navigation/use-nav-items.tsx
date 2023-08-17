import type { MenuProps } from 'antd';
import IconHome from 'assets/icons/home.svg';
import classNames from 'classnames';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './navigation.module.css';

const navItems = [
  {
    label: 'navigation.mainScreen',
    route: RoutesEnum.MainScreen,
    icon: <IconHome />,
  },
];

export const useNavItems = (currentRoute: string) => {
  const { t } = useTranslation();

  const isActive = useCallback(
    (route: string) => currentRoute === route,
    [currentRoute],
  );

  const items: MenuProps['items'] = navItems.map((item) => ({
    label: t(item.label),
    key: item.route,
    icon: item.icon,
    className: classNames([styles.item], {
      [styles.active]: isActive(item.route),
    }),
  }));

  return items;
};
