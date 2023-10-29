import { Component } from 'react';
import Button from 'src/components/button/Button';
import Input from 'src/components/input/Input';
import { MainState } from 'src/pages/main/types';
import {
  getQueryFromStorage,
  setQueryToStorage,
} from 'src/utils/StorageWorking/StorageWorking';

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
      <div className="main">
        <section className="search">
          <Input
            value={this.state.query}
            onChangeHandler={this.onSearchInputChange}
          />
          <Button text="Search" onClickHandler={this.onSearchBtnClick} />
          <Button text="Throw an error" onClickHandler={this.onErrorBtnClick} />
        </section>
      </div>
    );
  }
}
