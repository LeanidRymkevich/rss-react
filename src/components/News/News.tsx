import { FC } from 'react';

import styles from '@src/components/News/news.module.scss';

import { NewsList } from '@src/components/NewsList/NewsList';
import Loader from '@src/components/UI/Loader/Loader';
import Pagination from '@src/components/UI/Pagination/Pagination';
import SearchBar from '@src/components/SearchBar/SearchBar';

import { NewsItemProps } from '@src/components/NewsItem/types';

import { getNewsItemProps } from '@src/utils/NewsPageUtils';
import { useGetAllNewsQuery } from '@src/redux_store/api/newsApi';
import useRouterPath from '@src/hooks/useRouterPath';

const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const News: FC<object> = (): JSX.Element => {
  const { page, limit, query } = useRouterPath();

  const { data, isFetching, error } = useGetAllNewsQuery({
    limit,
    page,
    query,
  });

  if (error) throw error;

  const itemsProps: NewsItemProps[] = getNewsItemProps(
    data?.articles,
    page,
    limit
  );

  return (
    <div className={styles.news}>
      <SearchBar />
      <h2 className={styles.search_result_title}>{SEARCH_RESULT_TITLE_TEXT}</h2>
      {isFetching ? <Loader /> : <NewsList items={itemsProps} />}
      <Pagination total={data?.totalResults} limit={+limit} />
    </div>
  );
};

export default News;
