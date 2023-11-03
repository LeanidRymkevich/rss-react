import { Component } from 'react';
import { SEARCH_BTN_TEXT, SearchProps } from 'src/components/Search/types';
import Input from 'src/components/UI/Input/Input';
import Button from 'src/components/UI/Button/Button';

export default class Search extends Component<SearchProps> {
  public render(): JSX.Element {
    return (
      <div className={this.props.wrapperClass}>
        <Input
          className={this.props.inputClass}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChangeHandler}
        />
        <Button
          className={this.props.btnClass}
          text={SEARCH_BTN_TEXT}
          onClick={this.props.onClickHandler}
        />
      </div>
    );
  }
}
