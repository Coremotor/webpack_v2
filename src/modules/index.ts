import { lazy } from 'react';
export const NoFound = lazy(() => import('modules/no-found/no-found'));

export const Authorization = lazy(
  () => import('modules/authorization/authorization'),
);
export const MainScreen = lazy(() => import('modules/main-screen/main-screen'));
