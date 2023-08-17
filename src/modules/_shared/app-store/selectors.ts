import { RootState } from 'modules/_shared/root-store/store';

export const getIsLoading = (state: RootState) => state.app.isLoading;
export const getLocale = (state: RootState) => state.app.locale;
export const getDirection = (state: RootState) => state.app.direction;
