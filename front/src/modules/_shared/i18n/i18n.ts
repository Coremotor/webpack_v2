import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { LangEnum } from "modules/_shared/i18n/types";
import { initReactI18next } from "react-i18next";

// eslint-disable-next-line import/no-named-as-default-member,no-void
void i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  lng: "ru",
  fallbackLng: LangEnum.Ru,
  debug: false,
});

export default i18n;
