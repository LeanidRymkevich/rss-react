import { Component } from 'react';
import { ButtonProps } from 'src/components/UI/button/types';

export default class Button extends Component<ButtonProps> {
  render(): JSX.Element {
    return (
      <button
        className={this.props.class || ''}
        type={this.props.type || 'button'}
        onClick={this.props.onClickHandler}
      >
        {this.props.text}
      </button>
    );
  }
}
