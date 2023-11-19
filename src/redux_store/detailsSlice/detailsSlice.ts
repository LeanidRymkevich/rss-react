import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux_store/store';

import { initialState } from 'src/redux_store/detailsSlice/types';
import { Article } from 'src/utils/APIWorking/types';
import { QueryStatus } from 'src/redux_store/newsSlice/types';

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<Article | null>) => {
      state.article = action.payload;
    },
    setStatus(state, action: PayloadAction<QueryStatus>) {
      state.status = action.payload;
    },
  },
});

export const { setDetails, setStatus } = detailsSlice.actions;

export const selectDetails = (state: RootState) => state.details.article;
export const selectDetailsStatus = (state: RootState) => state.details.status;

export default detailsSlice.reducer;
