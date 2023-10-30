import { Component } from 'react';
import { InputProps } from 'src/components/UI/input/types';

export default class Input extends Component<InputProps> {
  render(): JSX.Element {
    return (
      <input
        className={this.props.class || ''}
        type={this.props.type || 'text'}
        placeholder={this.props.placeholder}
        value={this.props.value || ''}
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}
