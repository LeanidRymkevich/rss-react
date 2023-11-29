import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { newsApi } from '@src/redux_store/api/newsApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      newsApi: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
