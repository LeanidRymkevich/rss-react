import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux_store/store';

import { initialState } from 'src/redux_store/newsSlice/types';
import { APIResponse, Article } from '@src/redux_store/api/types';
import { REDUCERS_NAMES } from '@src/redux_store/types';

export const newsSlice = createSlice({
  name: REDUCERS_NAMES.NEWS,
  initialState,
  reducers: {
    setNews: (state, { payload }: PayloadAction<APIResponse>) => {
      const articles: Article[] | undefined = payload.articles;
      state.total = payload.totalResults;
      state.articles = articles || [];
    },
    setQuery(state, { payload }: PayloadAction<string>) {
      state.query = payload;
    },
    setPage(state, { payload }: PayloadAction<string>) {
      state.page = payload;
    },
    setLimit(state, { payload }: PayloadAction<string>) {
      state.limit = payload;
    },
    setNewIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
  },
});

export const { setNews, setQuery, setPage, setLimit, setNewIsLoading } =
  newsSlice.actions;

export const selectNews = (state: RootState) => state.news.articles;
export const selectQuery = (state: RootState) => state.news.query;
export const selectLimit = (state: RootState) => state.news.limit;
export const selectNewIsLoading = (state: RootState) => state.news.isLoading;

export default newsSlice.reducer;
