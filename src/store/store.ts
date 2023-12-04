import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { REDUCERS } from '@src/store/types';

import CountrySlice from '@src/store/CountriesSlice/CountriesSlice';
import FormDataSlice from '@src/store/FormDataSlice/FormDataSlice';

const rootReducer = combineReducers({
  [REDUCERS.COUNTRIES]: CountrySlice,
  [REDUCERS.FORM_DATA]: FormDataSlice,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
