import { createSlice } from '@reduxjs/toolkit';

import { REDUCERS } from '@src/store/types';
import { RootState } from '@src/store/store';

import { countries } from '@src/store/CountriesSlice/constants';

const initialState: string[] = countries;

const CountriesSlice = createSlice({
  name: REDUCERS.COUNTRIES,
  initialState,
  reducers: {},
});

export const selectCountries = (state: RootState): string[] =>
  state[REDUCERS.COUNTRIES];

export default CountriesSlice.reducer;
