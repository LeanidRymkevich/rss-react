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

import { NEWS_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';

const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const News: FC<object> = (): JSX.Element => {
  const { router, page, limit, query } = useRouterPath();

  const { data, isFetching, error } = useGetAllNewsQuery(
    {
      limit,
      page,
      query,
    },
    {
      skip: router.isFallback,
    }
  );

  if (error) throw error;

  const itemsProps: NewsItemProps[] = getNewsItemProps(
    data?.articles,
    page,
    limit
  );

  return (
    <div data-testid={NEWS_TEST_ID} className={styles.news}>
      <SearchBar />
      <h2 className={styles.search_result_title}>{SEARCH_RESULT_TITLE_TEXT}</h2>
      {isFetching || router.isFallback ? (
        <Loader />
      ) : (
        <NewsList items={itemsProps} />
      )}
      <Pagination total={data?.totalResults} />
    </div>
  );
};

export default News;
