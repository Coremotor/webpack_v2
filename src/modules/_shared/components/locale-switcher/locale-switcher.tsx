import { LocalesEnum } from "modules/_shared/i18n/types";
import { Select } from "modules/_shared/ui";

import { locales, useLocaleSwitcher } from "modules/_shared/components/locale-switcher/use-locale-switcher";

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
