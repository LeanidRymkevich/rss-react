import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import News from 'src/pages/News/News';
import RouterLayout from 'src/components/Router/RouterLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      <Route index element={<News />} />
    </Route>
  )
);

export default router;
