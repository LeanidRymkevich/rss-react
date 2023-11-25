import CommonLayout from '@src/components/layouts/CommonLayout/CommonLayout';
import { Pages } from '@src/pages/types';
import { AppStore, wrapper } from '@src/redux_store/store';
import {
  getAllNews,
  getRunningQueriesThunk,
  useGetAllNewsQuery,
} from '@src/redux_store/api/newsApi';
import { useRouter } from 'next/router';
import { useAppSelector } from '@src/hooks/ReduxHooks';

const Main = (): JSX.Element => {
  const router = useRouter();
  const pageNum: string = useAppSelector((state) => state.news.page);
  const limit: string = useAppSelector((state) => state.news.limit);
  const query: string = useAppSelector((state) => state.news.query);
  const { data } = useGetAllNewsQuery(
    {
      limit,
      page: (router.query.page as string) || pageNum,
      query,
    },
    {
      skip: router.isFallback,
    }
  );

  return (
    <CommonLayout pageName={Pages.MAIN}>
      <div>
        <h1>{JSON.stringify(data?.articles)}</h1>
      </div>
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
