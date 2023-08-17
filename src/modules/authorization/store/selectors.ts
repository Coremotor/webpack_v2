import { RootState } from 'modules/_shared/root-store/store';

export const getIsAuth = (state: RootState) => state.authorization.isAuth;
