import { Route, Routes } from 'react-router-dom';

import RouterLayout from 'src/components/layouts/RouterLayout/RouterLayout';
import MainLayout from 'src/components/layouts/MainLayout/MainLayout';
import Details from 'src/pages/Details/Details';
import NotFound from 'src/pages/NotFound/NotFound';
import { ReactNode } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export enum Pages {
  MAIN = 'main',
  DETAILS = 'details',
}

export enum INDEXES {
  MAIN = 'page',
  DETAILS = 'id',
}

const CustomRouter = (): ReactNode => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route
            path={`${Pages.MAIN}/:${INDEXES.MAIN}`}
            element={<MainLayout />}
          >
            <Route
              path={`${Pages.DETAILS}/:${INDEXES.DETAILS}`}
              element={<Details />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default CustomRouter;
