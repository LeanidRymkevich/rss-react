import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Pages, Paths } from '@src/Router/types';

import Layout from '@src/components/Layout/Layout';
import Main from '@src/pages/Main/Main';
import UncontrolledForm from '@src/pages/UncontrolledForm/UncontrolledForm';
import ReactHookForm from '@src/pages/ReactHookForm/ReactHookForm';
import NotFound from '@src/pages/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Paths[Pages.MAIN]} element={<Layout />}>
      <Route index element={<Main />}></Route>
      <Route
        path={Paths[Pages.UNCONTROLLED_FORM]}
        element={<UncontrolledForm />}
      ></Route>
      <Route
        path={Paths[Pages.REACT_HOOK_FORM]}
        element={<ReactHookForm />}
      ></Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
