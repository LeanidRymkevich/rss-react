import { ReactNode, useEffect } from 'react';

import styles from 'src/pages/News/news.module.scss';

import {
  NO_RESULT_FOUND_RESPONSE,
  NewsList,
} from 'src/components/NewsList/NewsList';
import Loader from 'src/components/UI/Loader/Loader';
import Pagination from 'src/components/UI/Pagination/Pagination';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import { NO_RESULTS_TEST_ID } from 'src/__mocks__/NewsList';
import { NewsItemProps } from 'src/components/NewsItem/types';
import { setNewIsLoading, setNews } from 'src/redux_store/newsSlice/newsSlice';
import { useGetAllNewsQuery } from 'src/utils/APIWorking/newsAPI';
import { getNewsItemProps } from 'src/utils/NewsPageUtils';

const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const News = (): ReactNode => {
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
    dispatch(setNewIsLoading(isFetching));
    if (!isFetching) {
      dispatch(setNews(data!));
    }
  }, [data, isFetching]);

  const isLoading: boolean = useAppSelector((store) => store.news.isLoading);

  if (!data || !data.articles || data.articles.length === 0) {
    return (
      <p data-testid={NO_RESULTS_TEST_ID} className={styles.no_results}>
        {NO_RESULT_FOUND_RESPONSE}
      </p>
    );
  }

  const itemsProps: NewsItemProps[] = getNewsItemProps(
    data.articles,
    page || pageNum,
    limit
  );

  return (
    <div className={styles.news}>
      <SearchBar />
      <h2 className={styles.search_result_title}>{SEARCH_RESULT_TITLE_TEXT}</h2>
      {isLoading ? <Loader /> : <NewsList items={itemsProps} />}
      <Pagination />
    </div>
  );
};

export default News;
