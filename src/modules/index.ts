import { lazy } from "react";
export const NotFound = lazy(() => import("modules/not-found/not-found"));
export const MainScreen = lazy(() => import("modules/main-screen/main-screen"));
export const DocumentFlow = lazy(
  () => import("modules/document-flow/document-flow"),
);
