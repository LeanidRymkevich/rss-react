import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import newsReducer from 'src/redux_store/newsSlice/newsSlice';
import { newsApi } from '@src/redux_store/api/newsApi';
import { REDUCERS_NAMES } from '@src/redux_store/types';

const rootReducer = combineReducers({
  [REDUCERS_NAMES.NEWS]: newsReducer,
  [REDUCERS_NAMES.NEWS_API]: newsApi.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
