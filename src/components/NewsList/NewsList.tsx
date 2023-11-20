import { ReactNode, useEffect } from 'react';

import styles from 'src/components/NewsList/NewsList.module.scss';

import { getNewsItemProps } from 'src/utils/NewsPageUtils';

import { NewsItem } from 'src/components/NewsItem/NewsItem';
import { NewsItemProps } from 'src/components/NewsItem/types';
import { LIST_TEST_ID, NO_RESULTS_TEST_ID } from 'src/__mocks__/NewsList';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { useGetAllNewsQuery } from 'src/utils/APIWorking/newsAPI';
import { useParams } from 'react-router-dom';
import { setNewIsLoading, setNews } from 'src/redux_store/newsSlice/newsSlice';

export const NO_RESULT_FOUND_RESPONSE = 'There are no results for this request';

export const NewsList = (): ReactNode => {
  const { page } = useParams();

  const dispatch = useAppDispatch();
  const pageNum: string = useAppSelector((state) => state.news.page);
  const limit: string = useAppSelector((state) => state.news.limit);
  const query: string = useAppSelector((state) => state.news.query);
  const { data, isFetching } = useGetAllNewsQuery({
    limit,
    page: page || pageNum,
    query,
  });

  useEffect(() => {
    console.log(data);
    dispatch(setNewIsLoading(isFetching));
    dispatch(setNews(data!));
  }, [data, isFetching]);

  if (!data || !data.articles || data.articles.length === 0) {
    return (
      <p data-testid={NO_RESULTS_TEST_ID} className={styles.no_results}>
        {NO_RESULT_FOUND_RESPONSE}
      </p>
    );
  }

  const params: NewsItemProps[] = getNewsItemProps(
    data.articles,
    page || pageNum,
    limit
  );

  return (
    <ul data-testid={LIST_TEST_ID} className={styles.news_list}>
      {params.map((item: NewsItemProps): ReactNode => {
        return <NewsItem key={Date.now() + item.itemNum} {...item} />;
      })}
    </ul>
  );
};
