import { configureStore } from '@reduxjs/toolkit';
import { isDev } from 'modules/_shared/config/env';
import { rootReducer } from 'modules/_shared/root-store/rootReduser';

export const store = configureStore({
  reducer: rootReducer,
  devTools: isDev,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
