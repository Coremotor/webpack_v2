import { request } from "modules/_shared/app-store/actions";
import { useAppDispatch } from "modules/_shared/root-store/hooks";
import { useTranslation } from "react-i18next";

export const MainScreen = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const fetch = () => dispatch(request());

  return (
    <>
      <div>{t("navigation.mainScreen")}</div>
      <button onClick={fetch}>Fetch posts and show response in console</button>
    </>
  );
};

export default MainScreen;
