import { ReactNode, useEffect, useState } from 'react';
import Button from 'src/components/UI/Button/Button';
import Search from 'src/components/UI/Search/Search';
import {
  DEFAULT_NEWS_CONTEXT,
  ERROR_BTN_TEXT,
  SEARCH_PLACEHOLDER,
  SEARCH_RESULT_TITLE_TEXT,
  SELECT_PARAMS,
} from 'src/pages/News/constants';
import styles from 'src/pages/News/news.module.scss';
import NewsList from 'src/components/NewsList/NewsList';
import Loader from 'src/components/UI/Loader/Loader';
import Select from 'src/components/UI/Select/Select';
import { useFetching } from 'src/hooks/useFetching';
import { getArticles } from 'src/utils/APIWorking/APIWorking';
import { APIResponse } from 'src/utils/APIWorking/types';
import Pagination from 'src/components/UI/Pagination/Pagination';
import { Pages } from 'src/components/Router/Router';
import { useNavigate, useParams } from 'react-router-dom';
import NewsContext from 'src/pages/News/NewsContext';
import { INewsContext } from 'src/pages/News/types';
import { setNewsRecords } from 'src/utils/NewsPageUtils';

const News = (): ReactNode => {
  const { page } = useParams();

  const context: INewsContext = DEFAULT_NEWS_CONTEXT;

  const [hasError, setError] = useState(false);
  const [searchValue, setSearchValue] = useState(context.query);
  const [perPage, setPerPage] = useState(context.limit);

  const navigate = useNavigate();

  const [fetching, isLoading] = useFetching(async (): Promise<void> => {
    const { query, limit } = context;
    const pageNum = page || context.page;
    const response: APIResponse = await getArticles(query, pageNum, limit);
    context.articles = response.articles || [];
    context.total = response.totalResults;
    context.page = pageNum;
    setNewsRecords(query, pageNum, limit);
  });

  useEffect(() => {
    fetching();
  }, [context.query, page, context.limit]);

  const onSearchBtnClick = async (): Promise<void> => {
    context.query = searchValue;
    navigate(`/${Pages.MAIN}/1`);
  };

  const onSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.target.value);
  };

  const onErrorBtnClick = (): void => {
    setError(true);
  };

  const onSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const limit: string = event.target.value;
    setPerPage(limit);
    context.limit = limit;
    navigate(`/${Pages.MAIN}/1`);
  };

  if (hasError) throw new Error();

  return (
    <div className={styles.news}>
      <NewsContext.Provider value={context}>
        <section className={styles.search_wrapper}>
          <Search
            wrapperClass={styles.search}
            inputProps={{
              className: styles.input,
              placeholder: SEARCH_PLACEHOLDER,
              value: searchValue,
              onChange: onSearchInputChange,
            }}
            btnProps={{
              className: styles.btn,
              onClick: onSearchBtnClick,
            }}
          />
          <Button className={styles.btn} onClick={onErrorBtnClick}>
            {ERROR_BTN_TEXT}
          </Button>
          <Select
            {...{
              ...SELECT_PARAMS,
              value: perPage,
              onChange: onSelectChange,
            }}
          ></Select>
        </section>
        <h2 className={styles.search_result_title}>
          {SEARCH_RESULT_TITLE_TEXT}
        </h2>
        {isLoading ? <Loader /> : <NewsList />}
        <Pagination {...{ ...context, pathTemplate: Pages.MAIN }} />
      </NewsContext.Provider>
    </div>
  );
};

export default News;
