import { ReactNode, useEffect, useState } from 'react';
import Button from 'src/components/UI/Button/Button';
import Search from 'src/components/Search/Search';
import {
  DEFAULT_STATE,
  ERROR_BTN_TEXT,
  SEARCH_PLACEHOLDER,
  SEARCH_RESULT_TITLE_TEXT,
  SELECT_PARAMS,
} from 'src/pages/News/constants';
import { setRecord } from 'src/utils/StorageWorking/StorageWorking';
import styles from 'src/pages/News/news.module.scss';
import NewsList from 'src/components/NewsList/NewsList';
import { getNewsItemProps } from 'src/utils/NewsPageUtils';
import Loader from 'src/components/UI/Loader/Loader';
import Select from 'src/components/UI/Select/Select';
import { useFetching } from 'src/hooks/useFetching';
import { getArticles } from 'src/utils/APIWorking/APIWorking';
import { APIResponse } from 'src/utils/APIWorking/types';
import Pagination from 'src/components/UI/Pagination/Pagination';
import { Pages } from 'src/components/Router/Router';
import { useParams } from 'react-router-dom';

const News = (): ReactNode => {
  const { page } = useParams();
  const [state, setState] = useState(DEFAULT_STATE);
  const [fetching, isLoading] = useFetching(async (): Promise<void> => {
    const { query, page, limit } = state;
    console.log(page);
    const response: APIResponse = await getArticles(query, page, limit);
    setState({
      ...state,
      page: page || '1',
      articles: response.articles || [],
      total: response.totalResults,
    });
  });

  useEffect(() => {
    fetching();
  }, [state.query, page, state.limit]);

  const onSearchBtnClick = async (): Promise<void> => {
    setRecord('page', '1');
    setRecord('query', state.inputValue);
    setState({ ...state, query: state.inputValue, page: '1' });
  };

  const onSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setState({ ...state, inputValue: event.target.value });
  };

  const onErrorBtnClick = (): void => {
    setState({ ...state, hasError: true });
  };

  const onSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setRecord('limit', event.target.value);
    setRecord('page', '1');
    setState({ ...state, limit: event.target.value, page: '1' });
  };

  return (
    <div className={styles.news}>
      <section className={styles.search_wrapper}>
        <Search
          wrapperClass={styles.search}
          inputProps={{
            className: styles.input,
            placeholder: SEARCH_PLACEHOLDER,
            value: state.inputValue,
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
            value: state.limit,
            onChange: onSelectChange,
          }}
        ></Select>
      </section>
      <h2 className={styles.search_result_title}>{SEARCH_RESULT_TITLE_TEXT}</h2>
      {isLoading ? <Loader /> : <NewsList items={getNewsItemProps(state)} />}
      <Pagination
        {...{
          ...state,
          pathTemplate: Pages.MAIN,
        }}
      />
    </div>
  );
};

export default News;
