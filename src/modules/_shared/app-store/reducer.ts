import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { Locale } from "antd/es/locale";
import localeRu from "antd/locale/ru_RU";
import { TAppState, TDirection } from "modules/_shared/app-store/types";
import { breakpoints } from "modules/_shared/breakpoints/breakpoints";

const initialState: TAppState = {
  isMobile: window.innerWidth <= breakpoints.md,
  isLoading: false,
  isDarkMode: false,
  locale: localeRu,
  direction: "ltr",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsMobile(state: TAppState, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
    setIsLoading(state: TAppState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsDarkMode(state: TAppState, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
    },
    setLocale(state: TAppState, action: PayloadAction<Locale>) {
      state.locale = action.payload;
    },
    setDirection(state: TAppState, action: PayloadAction<TDirection>) {
      state.direction = action.payload;
    },
  },
});

export const { setIsMobile, setLocale, setIsLoading } = appSlice.actions;

export default appSlice.reducer;
