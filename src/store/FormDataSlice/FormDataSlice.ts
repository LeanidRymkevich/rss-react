import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/store/store';

import { REDUCERS } from '@src/store/types';
import { FormDataItem, initialState } from '@src/store/FormDataSlice/types';

export const FormDataSlice = createSlice({
  name: REDUCERS.FORM_DATA,
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<FormDataItem>) {
      state.dataItems.push(payload);
    },
  },
});

export const { addItem } = FormDataSlice.actions;

export const selectForDataItems = (state: RootState): FormDataItem[] =>
  state[REDUCERS.FORM_DATA].dataItems;

export default FormDataSlice.reducer;
