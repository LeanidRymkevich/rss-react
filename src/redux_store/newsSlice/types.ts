import { Article } from 'src/utils/APIWorking/types';
import { state } from 'src/utils/StorageWorking/StorageWorking';

export type QueryStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface NewsState {
  status: QueryStatus;
  query: string;
  page: string;
  limit: string;
  total: number;
  articles: Article[];
}

export const initialState: NewsState = {
  status: 'idle',
  ...state,
  total: 0,
  articles: [],
};
