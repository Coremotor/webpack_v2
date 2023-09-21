import type { MenuProps } from "antd";
import IconError from "assets/icons/cancel.svg";
import IconContract from "assets/icons/contract.svg";
import IconHome from "assets/icons/home.svg";
import IconWarning from "assets/icons/warning.svg";
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
    label: "navigation.documentFlow",
    route: RoutesEnum.DocumentFlow,
    icon: <IconContract />,
  },
  {
    label: "Page with error",
    route: RoutesEnum.PageWithError,
    icon: <IconError />,
  },
  {
    label: "Page no found",
    route: RoutesEnum.NotFound,
    icon: <IconWarning />,
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
