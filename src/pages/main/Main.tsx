import { Component } from 'react';
import Button from 'src/components/UI/button/Button';
import Search from 'src/components/search/Search';
import {
  ERROR_BTN_TEXT,
  MainState,
  SEARCH_PLACEHOLDER,
} from 'src/pages/main/types';
import {
  getQueryFromStorage,
  setQueryToStorage,
} from 'src/utils/StorageWorking/StorageWorking';
import styles from 'src/pages/main/main.module.scss';

export default class Main extends Component<unknown, MainState> {
  state = {
    query: getQueryFromStorage(),
    results: [],
  };

  onSearchBtnClick = (): void => {
    setQueryToStorage(this.state.query);
  };

  onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ query: event.target.value });
  };

  onErrorBtnClick = (): void => {
    throw new Error();
  };

  render(): JSX.Element {
    return (
      <div className={styles.main}>
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
      </div>
    );
  }
}
