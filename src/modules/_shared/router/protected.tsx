import { useAppSelector } from 'modules/_shared/root-store/hooks';
import { getIsAuth } from 'modules/authorization/store/selectors';
import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { RoutesEnum } from './routes';

type TProtectedProps = {
  children: ReactNode;
};

export const Protected: FC<TProtectedProps> = ({ children }) => {
  const auth = useAppSelector(getIsAuth);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutesEnum.Authorization}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
