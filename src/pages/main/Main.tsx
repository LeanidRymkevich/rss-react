import { ReactNode, useEffect, useState } from 'react';
import Button from 'src/components/UI/Button/Button';
import Search from 'src/components/Search/Search';
import {
  DEFAULT_STATE,
  ERROR_BTN_TEXT,
  SEARCH_PLACEHOLDER,
  SEARCH_RESULT_TITLE_TEXT,
  TITLE,
} from 'src/pages/Main/constants';
import {
  getQueryFromStorage,
  setQueryToStorage,
} from 'src/utils/StorageWorking/StorageWorking';
import styles from 'src/pages/main/main.module.scss';
import NewsList from 'src/components/NewsList/NewsList';
import {
  doSearch,
  getNewsItemProps,
} from 'src/logic/MainPageLogic/MainPageLogic';
import Loader from 'src/components/UI/Loader/Loader';

const Main = (): ReactNode => {
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect((): void => {
    const storageQuery: string = getQueryFromStorage();
    doSearch(state, setState, storageQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchBtnClick = async (): Promise<void> => {
    setQueryToStorage(state.query);
    doSearch(state, setState, state.query);
  };

  const onSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setState({ ...state, query: event.target.value });
  };

  const onErrorBtnClick = (): void => {
    setState({ ...state, hasError: true });
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{TITLE}</h1>
      <section className={styles.search_wrapper}>
        <Search
          wrapperClass={styles.search}
          inputProps={{
            className: styles.input,
            placeholder: SEARCH_PLACEHOLDER,
            value: state.query,
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
      </section>
      <h2 className={styles.search_result_title}>{SEARCH_RESULT_TITLE_TEXT}</h2>
      {state.isNewsLoading ? (
        <Loader />
      ) : (
        <NewsList items={getNewsItemProps(state.results)} />
      )}
    </div>
  );
};

export default Main;
