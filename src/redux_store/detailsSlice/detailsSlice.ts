import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux_store/store';

import { initialState } from 'src/redux_store/detailsSlice/types';
import { Article } from 'src/utils/APIWorking/types';

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<Article | null>) => {
      state.article = action.payload;
    },
    setDetailsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setDetails, setDetailsLoading } = detailsSlice.actions;

export const selectDetails = (state: RootState) => state.details.article;
export const selectDetailsLoading = (state: RootState) =>
  state.details.isLoading;

export default detailsSlice.reducer;
