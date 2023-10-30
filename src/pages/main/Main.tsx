import { Component } from 'react';
import Button from 'src/components/UI/Button/Button';
import Search from 'src/components/Search/Search';
import {
  ERROR_BTN_TEXT,
  MainState,
  SEARCH_PLACEHOLDER,
  SEARCH_RESULT_TITLE_TEXT,
  TITLE,
} from 'src/pages/main/types';
import {
  getQueryFromStorage,
  setQueryToStorage,
} from 'src/utils/StorageWorking/StorageWorking';
import styles from 'src/pages/main/main.module.scss';
import { getArticles } from 'src/utils/APIWorking/APIWorking';
import NewsList from 'src/components/NewsList/NewsList';
import { APIResponse, Article } from 'src/utils/APIWorking/types';
import { NewsItemProps } from 'src/components/NewsItem/types';

export default class Main extends Component<unknown, MainState> {
  state = {
    query: '',
    results: [],
    total: 0,
  };

  async componentDidMount(): Promise<void> {
    const storageQuery: string = getQueryFromStorage();
    const response: APIResponse = await getArticles(storageQuery || null);
    const [totalItems, resultItems] = [
      response.totalResults,
      response.articles || [],
    ];
    this.setState({
      query: storageQuery,
      results: resultItems,
      total: totalItems,
    });
  }

  onSearchBtnClick = async (): Promise<void> => {
    setQueryToStorage(this.state.query);
    const response: APIResponse = await getArticles(this.state.query || null);
    const [totalItems, resultItems] = [
      response.totalResults,
      response.articles || [],
    ];
    this.setState({
      results: resultItems,
      total: totalItems,
    });
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
        {this.state.results.length !== 0 ? (
          <NewsList
            items={this.state.results.map(
              (item: Article, idx: number): NewsItemProps => {
                return {
                  itemNum: `${idx + 1}`,
                  description: item.description || 'none',
                  publisher: item.source.name,
                  author: item.author || 'none',
                };
              }
            )}
          />
        ) : (
          <p>There is no results on this request</p>
        )}
      </div>
    );
  }
}
