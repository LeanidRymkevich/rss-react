import { Component } from 'react';
import Button from 'src/components/UI/Button/Button';
import Search from 'src/components/Search/Search';
import { MainState } from 'src/pages/main/types';
import {
  ERROR_BTN_TEXT,
  NO_RESULT_FOUND_RESPONSE,
  SEARCH_PLACEHOLDER,
  SEARCH_RESULT_TITLE_TEXT,
  TITLE,
} from 'src/pages/main/constants';
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

export default class Main extends Component<unknown, MainState> {
  state = {
    query: '',
    results: [],
    total: 0,
    isNewsLoading: false,
    hasError: false,
  };

  componentDidMount = async (): Promise<void> => {
    const storageQuery: string = getQueryFromStorage();
    doSearch(this, storageQuery);
  };

  onSearchBtnClick = async (): Promise<void> => {
    setQueryToStorage(this.state.query);
    doSearch(this, this.state.query);
  };

  onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ query: event.target.value });
  };

  onErrorBtnClick = (): void => {
    this.setState({ hasError: true });
  };

  render(): JSX.Element {
    if (this.state.hasError) throw new Error();

    return (
      <div className={styles.main}>
        <h1 className={styles.title}>{TITLE}</h1>
        <section className={styles.search_wrapper}>
          <Search
            wrapperClass={styles.search}
            inputClass={styles.input}
            btnClass={styles.btn}
            value={this.state.query}
            placeholder={SEARCH_PLACEHOLDER}
            onChangeHandler={this.onSearchInputChange}
            onClickHandler={this.onSearchBtnClick}
          />
          <Button
            class={styles.btn}
            text={ERROR_BTN_TEXT}
            onClickHandler={this.onErrorBtnClick}
          />
        </section>
        <h2 className={styles.search_result_title}>
          {SEARCH_RESULT_TITLE_TEXT}
        </h2>
        {this.state.isNewsLoading ? (
          <Loader />
        ) : (
          <NewsList
            items={getNewsItemProps(this.state.results)}
            noDataMessage={NO_RESULT_FOUND_RESPONSE}
          />
        )}
      </div>
    );
  }
}
