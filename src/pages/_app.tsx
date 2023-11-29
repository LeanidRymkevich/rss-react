import type { AppProps } from 'next/app';
import { FC } from 'react';

import '@src/styles/common.scss';

import ErrorBoundary from '@src/components/ErrorBoundary/ErrorBoundary';
import { wrapper } from '@src/redux_store/store';
import { Provider } from 'react-redux';

const MyApp: FC<AppProps> = ({ Component, ...rest }: AppProps): JSX.Element => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  );
};

export default MyApp;
