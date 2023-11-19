import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux_store/store';

import { QueryStatus, initialState } from 'src/redux_store/newsSlice/types';
import { APIResponse, Article } from 'src/utils/APIWorking/types';

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<APIResponse>) => {
      const articles: Article[] | undefined = action.payload.articles;
      state.total = action.payload.totalResults;
      state.articles = articles || [];
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<string>) {
      state.limit = action.payload;
    },
    setStatus(state, action: PayloadAction<QueryStatus>) {
      state.status = action.payload;
    },
  },
});

export const { setNews, setQuery, setPage, setLimit, setStatus } =
  newsSlice.actions;

export const selectNews = (state: RootState) => state.news.articles;
export const selectQuery = (state: RootState) => state.news.query;
export const selectLimit = (state: RootState) => state.news.limit;
export const selectNewsStatus = (state: RootState) => state.news.status;

export default newsSlice.reducer;
