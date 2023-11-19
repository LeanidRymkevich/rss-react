import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import newsReducer from 'src/redux_store/newsSlice/newsSlice';
import { newsAPI } from 'src/utils/APIWorking/newsAPI';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    [newsAPI.reducerPath]: newsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
