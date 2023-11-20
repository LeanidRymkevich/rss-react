import { ReactNode } from 'react';

import styles from 'src/pages/News/news.module.scss';

import { NewsList } from 'src/components/NewsList/NewsList';
import Loader from 'src/components/UI/Loader/Loader';
import Pagination from 'src/components/UI/Pagination/Pagination';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { useAppSelector } from 'src/hooks/reduxHooks';

const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const News = (): ReactNode => {
  const isLoading: boolean = useAppSelector((store) => store.news.isLoading);
  return (
    <div className={styles.news}>
      <SearchBar />
      <h2 className={styles.search_result_title}>{SEARCH_RESULT_TITLE_TEXT}</h2>
      {isLoading ? <Loader /> : <NewsList />}
      <Pagination />
    </div>
  );
};

export default News;
