import { request } from "modules/_shared/app-store/actions";
import { useAppDispatch } from "modules/_shared/root-store/hooks";
import { useTranslation } from "react-i18next";

export const MainScreen = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const getSomethingFromServer = () => dispatch(request());

  return (
    <>
      <div>{t("navigation.mainScreen")}</div>
      <button onClick={getSomethingFromServer}>Send</button>
    </>
  );
};

export default MainScreen;
