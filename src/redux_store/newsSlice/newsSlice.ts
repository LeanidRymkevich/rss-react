import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux_store/store';

import { initialState } from 'src/redux_store/newsSlice/types';
import { APIResponse, Article } from 'src/utils/APIWorking/types';

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    handleResponse: (state, action: PayloadAction<APIResponse>) => {
      const articles: Article[] | undefined = action.payload.articles;
      state.total = action.payload.totalResults;
      state.articles = articles || [];
    },
  },
});

export const { handleResponse } = newsSlice.actions;

export const selectArticles = (state: RootState) => state.news.articles;

export default newsSlice.reducer;
