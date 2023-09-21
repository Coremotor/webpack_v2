import { lazy } from "react";
export const NoFound = lazy(() => import("modules/no-found/no-found"));
export const MainScreen = lazy(() => import("modules/main-screen/main-screen"));
export const DocumentFlow = lazy(
  () => import("modules/document-flow/document-flow"),
);
