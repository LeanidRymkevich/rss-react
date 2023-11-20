import { ReactNode, useEffect } from 'react';

import styles from 'src/pages/News/news.module.scss';

import { NewsList } from 'src/components/NewsList/NewsList';
import Loader from 'src/components/UI/Loader/Loader';
import Pagination from 'src/components/UI/Pagination/Pagination';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import { NewsItemProps } from 'src/components/NewsItem/types';
import {
  setNewIsLoading,
  setNews,
  setPage,
} from 'src/redux_store/newsSlice/newsSlice';
import { useGetAllNewsQuery } from 'src/utils/APIWorking/newsAPI';
import { getNewsItemProps, setNewsRecords } from 'src/utils/NewsPageUtils';

const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const News = (): ReactNode => {
  const { page } = useParams();

  const dispatch = useAppDispatch();
  const isLoading: boolean = useAppSelector((store) => store.news.isLoading);
  const pageNum: string = useAppSelector((state) => state.news.page);
  const limit: string = useAppSelector((state) => state.news.limit);
  const query: string = useAppSelector((state) => state.news.query);
  const { data, isFetching } = useGetAllNewsQuery({
    limit,
    page: page || pageNum,
    query,
  });

  useEffect(() => {
    console.log(isLoading);
    dispatch(setNewIsLoading(isFetching));
    dispatch(setPage(page || pageNum));
    if (!isFetching) {
      dispatch(setNews(data!));
    }
    setNewsRecords(query, pageNum, limit);
  }, [isFetching]);

  const itemsProps: NewsItemProps[] = getNewsItemProps(
    data?.articles,
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
