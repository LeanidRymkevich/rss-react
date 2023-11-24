import type { AppProps } from 'next/app';

import '@src/styles/common.scss';

import ErrorBoundary from '@src/components/ErrorBoundary/ErrorBoundary';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default MyApp;
