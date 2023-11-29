import { FC } from 'react';

import styles from '@src/pages/main/[page]/details/DetailsPage.module.scss';

import { Pages } from '@src/pages/types';

import {
  getAllNews,
  getRunningQueriesThunk,
} from '@src/redux_store/api/newsApi';

import CommonLayout from '@src/components/layouts/CommonLayout/CommonLayout';
import { AppStore, wrapper } from '@src/redux_store/store';
import News from '@src/components/News/News';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import useContextPath from '@src/hooks/useContextPath';
import useRouterPath from '@src/hooks/useRouterPath';
import { getPath } from '@src/utils/PathUtils';
import Details from '@src/components/Details/Details';

const DetailsPage: FC<object> = (): JSX.Element => {
  const { router, page, limit, query, id } = useRouterPath();

  const onMainPageClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!id) return;
    if (event.target instanceof HTMLAnchorElement) {
      const href: string = event.target.href;
      if (href !== getPath({ page, limit, query, id })) return;
    }

    router.push(getPath({ page, limit, query, id: undefined }));
  };

  return (
    <CommonLayout pageName={Pages.DETAILS}>
      <div className={styles.main_wrapper} onClick={onMainPageClick}>
        <News />
        <Details />
      </div>
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

export default DetailsPage;
