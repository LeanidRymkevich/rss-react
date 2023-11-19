import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import newsReducer from 'src/redux_store/newsSlice/newsSlice';
import detailsReducer from 'src/redux_store/detailsSlice/detailsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    details: detailsReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
