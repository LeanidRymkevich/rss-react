import { FC } from 'react';

import { Pages } from '@src/pages/types';

import {
  getAllNews,
  getRunningQueriesThunk,
} from '@src/redux_store/api/newsApi';

import MainLayout from '@src/components/layouts/MainLayout/MainLayout';
import CommonLayout from '@src/components/layouts/CommonLayout/CommonLayout';
import { AppStore, wrapper } from '@src/redux_store/store';

const Main: FC<object> = (): JSX.Element => {
  return (
    <CommonLayout pageName={Pages.MAIN}>
      <MainLayout />
    </CommonLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store: AppStore) => async () => {
    const query: string = store.getState().news.query;
    const page: string = store.getState().news.page;
    const limit: string = store.getState().news.limit;
    store.dispatch(getAllNews.initiate({ query, page, limit }));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);

export default Main;
