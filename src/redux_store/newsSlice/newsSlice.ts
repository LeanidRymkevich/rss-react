import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux_store/store';

import { initialState } from 'src/redux_store/newsSlice/types';
import { APIResponse } from '@src/redux_store/api/types';
import { REDUCERS_NAMES } from '@src/redux_store/types';

export const newsSlice = createSlice({
  name: REDUCERS_NAMES.NEWS,
  initialState,
  reducers: {
    setTotal: (
      state,
      { payload: { totalResults } }: PayloadAction<APIResponse>
    ) => {
      state.total = totalResults;
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
  },
});

export const { setTotal, setQuery, setPage, setLimit } = newsSlice.actions;

export const selectTotal = (state: RootState) => state.news.total;
export const selectQuery = (state: RootState) => state.news.query;
export const selectLimit = (state: RootState) => state.news.limit;

export default newsSlice.reducer;
