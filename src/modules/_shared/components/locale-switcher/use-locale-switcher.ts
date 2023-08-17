import 'dayjs/locale/en';
import 'dayjs/locale/ru';

import localeEn from 'antd/locale/en_US';
import localeRu from 'antd/locale/ru_RU';
import { setLocale } from 'modules/_shared/app-store/reducer';
import { LangEnum, LocalesEnum } from 'modules/_shared/i18n/types';
import { useAppDispatch } from 'modules/_shared/root-store/hooks';
import { useTranslation } from 'react-i18next';

export const locales = [
  { label: 'English', value: LocalesEnum.EnUS },
  { label: 'Русский', value: LocalesEnum.RuRU },
];

export const useLocaleSwitcher = () => {
  const dispatch = useAppDispatch();

  const { i18n } = useTranslation();
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  const handleChangeLocale = async (localeValue: string) => {
    switch (localeValue) {
      case LocalesEnum.RuRU:
        dispatch(setLocale(localeRu));
        await changeLanguage(LangEnum.Ru);
        break;
      case LocalesEnum.EnUS:
        dispatch(setLocale(localeEn));
        await changeLanguage(LangEnum.En);
        break;
      default:
        dispatch(setLocale(localeRu));
        await changeLanguage(LangEnum.Ru);
    }
  };

  return {
    handleChangeLocale,
  };
};
