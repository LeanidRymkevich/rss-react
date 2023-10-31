import { Component } from 'react';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from 'src/components/ErrorBoundary/types';
import FallbackUI from 'src/components/ErrorBoundary/FallbackUI';

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error): void {
    console.log(error);
    this.setState({ hasError: true });
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return <FallbackUI />;
    }
    return this.props.children;
  }
}
