import { Authorization, MainScreen, NoFound } from 'modules';
import { AppLayout } from 'modules/_shared/layouts';
import { Route, Routes } from 'react-router-dom';

import { Protected } from './protected';
import { RoutesEnum } from './routes';

const RootRoute = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Authorization} element={<Authorization />} />
      <Route path={RoutesEnum.NoMatch} element={<NoFound />} />
      <Route path={RoutesEnum.MainScreen} element={<AppLayout />}>
        <Route
          index
          element={
            <Protected>
              <MainScreen />
            </Protected>
          }
        />
      </Route>
    </Routes>
  );
};

export default RootRoute;
