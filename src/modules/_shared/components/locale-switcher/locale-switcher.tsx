import { LocalesEnum } from 'modules/_shared/i18n/types';
import { Select } from 'modules/_shared/ui';

import { locales, useLocaleSwitcher } from './use-locale-switcher';

export const LocaleSwitcher = () => {
  const { handleChangeLocale } = useLocaleSwitcher();

  return (
    <Select
      onChange={handleChangeLocale}
      options={locales}
      defaultValue={LocalesEnum.RuRU}
    />
  );
};
