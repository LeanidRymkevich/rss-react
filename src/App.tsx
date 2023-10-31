import { Component } from 'react';
import Main from 'src/pages/main/Main';
import 'src/common_styles/common.scss';
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    );
  }
}
