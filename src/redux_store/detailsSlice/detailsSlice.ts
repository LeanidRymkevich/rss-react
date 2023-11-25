import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux_store/store';
import { initialState } from 'src/redux_store/detailsSlice/types';
import { Article } from '@src/redux_store/api/types';
import { REDUCERS_NAMES } from '@src/redux_store/types';

export const detailsSlice = createSlice({
  name: REDUCERS_NAMES.DETAILS,
  initialState,
  reducers: {
    setDetails: (state, { payload }: PayloadAction<Article | null>) => {
      state.article = payload;
    },
    setDetailsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
  },
});

export const { setDetails, setDetailsLoading } = detailsSlice.actions;

export const selectDetails = (state: RootState) => state.details.article;
export const selectDetailsLoading = (state: RootState) =>
  state.details.isLoading;

export default detailsSlice.reducer;
