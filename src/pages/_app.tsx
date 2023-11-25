import type { AppProps } from 'next/app';
import { FC } from 'react';

import '@src/styles/common.scss';

import ErrorBoundary from '@src/components/ErrorBoundary/ErrorBoundary';

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
