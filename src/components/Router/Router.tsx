import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RouterLayout from 'src/components/layouts/RouterLayout/RouterLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Details from 'src/pages/Details/Details';
import NotFound from 'src/pages/NotFound/NotFound';

export enum Pages {
  MAIN = 'main',
  DETAILS = 'details',
}

export enum INDEXES {
  MAIN = 'pageNum',
  DETAILS = 'id',
}

const details = {
  source: {
    id: 'engadget',
    name: 'Engadget',
  },
  author: 'Steve Dent',
  title:
    'Apple Watch battery drain issues to be fixed in upcoming watchOS update',
  description:
    'Last week, a number of Apple Watch owners noticed that their batteries were draining much quicker than normal after they installed the latest watchOS version 10.1. Now, Apple has acknowledged the issue in an internal memo seen by MacRumors, and promised that …',
  url: 'https://www.engadget.com/apple-watch-battery-drain-issues-to-be-fixed-in-upcoming-watchos-update-090554269.html',
  urlToImage:
    'https://s.yimg.com/os/creatr-uploaded-images/2023-11/83e94350-7c7e-11ee-bb27-d2ff2ed54a72',
  publishedAt: '2023-11-06T09:05:54Z',
  content:
    'Last week, a number of Apple Watch owners noticed that their batteries were draining much quicker than normal after they installed the latest watchOS version 10.1. Now, Apple has acknowledged the iss… [+1162 chars]',
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      <Route path={`${Pages.MAIN}?/:${INDEXES.MAIN}?`} element={<MainLayout />}>
        <Route
          path={`${Pages.DETAILS}/:${INDEXES.DETAILS}`}
          element={<Details {...details} />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
