import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import newsReducer from 'src/redux_store/newsSlice/newsSlice';
import detailsReducer from 'src/redux_store/detailsSlice/detailsSlice';
import { newsAPI } from 'src/utils/APIWorking/newsAPI';

const rootReducer = combineReducers({
  news: newsReducer,
  details: detailsReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newsAPI.middleware),
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

setupListeners(setupStore().dispatch);
