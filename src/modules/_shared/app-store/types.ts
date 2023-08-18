import type { Locale } from "antd/es/locale";

export type TDirection = "rtl" | "ltr";

export type TAppState = {
  isMobile: boolean;
  isLoading: boolean;
  isDarkMode: boolean;
  locale: Locale;
  direction: TDirection;
};
