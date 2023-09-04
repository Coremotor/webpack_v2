import { Authorization, MainScreen, NoFound } from "modules";
import { AppLayout } from "modules/_shared/layouts";
import PageWithError from "modules/page-with-error/page-with-error";
import Two from "modules/two/two";
import { Route, Routes } from "react-router-dom";

import { Protected } from "./protected";
import { RoutesEnum } from "./routes";

const RootRoute = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Authorization} element={<Authorization />} />
      <Route path={RoutesEnum.NotFound} element={<NoFound />} />
      <Route path={RoutesEnum.MainScreen} element={<AppLayout />}>
        <Route
          index
          element={
            <Protected>
              <MainScreen />
            </Protected>
          }
        />

        <Route
          path={RoutesEnum.PageWithError}
          element={
            <Protected>
              <PageWithError />
            </Protected>
          }
        />

        <Route
          path={RoutesEnum.Two}
          element={
            <Protected>
              <Two />
            </Protected>
          }
        />
      </Route>
    </Routes>
  );
};

export default RootRoute;
