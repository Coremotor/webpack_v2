import { LocaleSwitcher } from 'modules/_shared/components';
import { useTranslation } from 'react-i18next';

export const MainScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t('navigation.mainScreen')}</div>
      <LocaleSwitcher />
    </>
  );
};

export default MainScreen;
