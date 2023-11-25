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
  },
});

export const { setDetails } = detailsSlice.actions;

export const selectDetails = (state: RootState) => state.details.article;

export default detailsSlice.reducer;
