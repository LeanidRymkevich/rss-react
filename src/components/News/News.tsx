import { FC, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';

import styles from '@src/components/News/news.module.scss';

import { NewsList } from '@src/components/NewsList/NewsList';
import Loader from '@src/components/UI/Loader/Loader';
import Pagination from '@src/components/UI/Pagination/Pagination';
import SearchBar from '@src/components/SearchBar/SearchBar';

import { NewsItemProps } from '@src/components/NewsItem/types';
import { INDEXES } from '@src/pages/types';

import { getNewsItemProps } from '@src/utils/NewsPageUtils';
import { useAppDispatch, useAppSelector } from '@src/hooks/ReduxHooks';
import { useGetAllNewsQuery } from '@src/redux_store/api/newsApi';
import { setPage, setTotal } from '@src/redux_store/newsSlice/newsSlice';

const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const News: FC<object> = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const dispatch = useAppDispatch();
  const pageNum: string = useAppSelector((state) => state.news.page);
  const limit: string = useAppSelector((state) => state.news.limit);
  const query: string = useAppSelector((state) => state.news.query);

  const page: string = router.query[INDEXES.MAIN] as string;
  const { data, isFetching, error } = useGetAllNewsQuery({
    limit,
    page: page || pageNum,
    query,
  });

  if (error) throw error;

  useEffect(() => {
    dispatch(setPage(page || pageNum));
    if (data) {
      dispatch(setTotal(data));
    }
  }, [data, dispatch, isFetching, page, pageNum]);

  const itemsProps: NewsItemProps[] = getNewsItemProps(
    data?.articles,
    page || pageNum,
    limit
  );

  return (
    <div className={styles.news}>
      <SearchBar />
      <h2 className={styles.search_result_title}>{SEARCH_RESULT_TITLE_TEXT}</h2>
      {isFetching ? <Loader /> : <NewsList items={itemsProps} />}
      <Pagination />
    </div>
  );
};

export default News;
