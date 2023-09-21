import { AppLayout } from "modules/_shared/layouts";
import { DocumentFlow, MainScreen, NoFound } from "modules/index";
import PageWithError from "modules/page-with-error/page-with-error";
import { Route, Routes } from "react-router-dom";

import { Protected } from "modules/_shared/router/protected";
import { RoutesEnum } from "modules/_shared/router/routes";

const RootRoute = () => {
  return (
    <Routes>
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
          path={RoutesEnum.DocumentFlow}
          element={
            <Protected>
              <DocumentFlow />
            </Protected>
          }
        />
      </Route>
    </Routes>
  );
};

export default RootRoute;
