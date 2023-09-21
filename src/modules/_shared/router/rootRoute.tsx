import { AppLayout } from "modules/_shared/layouts";
import { Protected } from "modules/_shared/router/protected";
import { RoutesEnum } from "modules/_shared/router/routes";
import { DocumentFlow, MainScreen, NotFound } from "modules/index";
import PageWithError from "modules/page-with-error/page-with-error";
import { Route, Routes } from "react-router-dom";

const RootRoute = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.NotFound} element={<NotFound />} />
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
