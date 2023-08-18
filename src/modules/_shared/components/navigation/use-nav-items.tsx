import type { MenuProps } from "antd";
import IconHome from "assets/icons/home.svg";
import classNames from "classnames";
import { RoutesEnum } from "modules/_shared/router/routes";
import { useTranslation } from "react-i18next";

import styles from "./navigation.module.css";

const navItems = [
  {
    label: "navigation.mainScreen",
    route: RoutesEnum.MainScreen,
    icon: <IconHome />,
  },
  {
    label: "Two",
    route: RoutesEnum.Two,
    icon: <IconHome />,
  },
  {
    label: "PageWithError",
    route: RoutesEnum.PageWithError,
    icon: <IconHome />,
  },
  {
    label: "Page no found",
    route: "/no-found",
    icon: <IconHome />,
  },
];

export const useNavItems = () => {
  const { t } = useTranslation();

  const items: MenuProps["items"] = navItems.map((item) => ({
    label: t(item.label),
    key: item.route,
    icon: item.icon,
    className: classNames([styles.item]),
  }));

  return { items };
};
