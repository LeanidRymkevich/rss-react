import { Component } from 'react';
import { SEARCH_BTN_TEXT, SearchProps } from 'src/components/search/types';
import Input from 'src/components/UI/input/Input';
import Button from 'src/components/UI/button/Button';

export default class Search extends Component<SearchProps> {
  render(): JSX.Element {
    return (
      <div className={this.props.wrapperClass}>
        <Input
          class={this.props.inputClass}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChangeHandler={this.props.onChangeHandler}
        />
        <Button
          class={this.props.btnClass}
          text={SEARCH_BTN_TEXT}
          onClickHandler={this.props.onClickHandler}
        />
      </div>
    );
  }
}
