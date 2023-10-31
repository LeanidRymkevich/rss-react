import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  // render(): JSX.Element {
  //   if (this.state.hasError) {
  //     return <p>Something goes wrong!</p>;
  //   } else {
  //     return this.props.children;
  //   }
  // }
}
