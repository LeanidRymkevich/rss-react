import { FC } from 'react';

import { Pages } from '@src/pages/types';

import {
  getAllNews,
  getRunningQueriesThunk,
} from '@src/redux_store/api/newsApi';

import CommonLayout from '@src/components/layouts/CommonLayout/CommonLayout';
import { AppStore, wrapper } from '@src/redux_store/store';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import News from '@src/components/News/News';
import useContextPath from '@src/hooks/useContextPath';

const Main: FC<object> = (): JSX.Element => {
  return (
    <CommonLayout pageName={Pages.MAIN}>
      <News />
    </CommonLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store: AppStore) =>
    async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
      const { query, page, limit } = useContextPath(context);
      store.dispatch(
        getAllNews.initiate({
          limit,
          page,
          query,
        })
      );

      await Promise.all(store.dispatch(getRunningQueriesThunk()));
      return {
        props: {},
      };
    }
);

export default Main;
