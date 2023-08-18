import { setIsMobile } from "modules/_shared/app-store/reducer";
import { breakpoints } from "modules/_shared/breakpoints/breakpoints";
import { useAppDispatch } from "modules/_shared/root-store/hooks";
import { useCallback, useEffect, useState } from "react";

export const useMobileNavigation = () => {
  const dispatch = useAppDispatch();
  const [showNavigation, setShowNavigation] = useState(false);

  const isMobileScreenSize = () => window.innerWidth <= breakpoints.md;

  const toggleShowNavigation = () =>
    setShowNavigation((prevState) => !prevState);

  const handleWindowResize = useCallback(() => {
    dispatch(setIsMobile(isMobileScreenSize()));
    setShowNavigation(isMobileScreenSize());
  }, [dispatch]);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return {
    showNavigation,
    toggleShowNavigation,
  };
};
