import { Article } from 'src/utils/APIWorking/types';

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
  query: '',
  page: '1',
  limit: '10',
  total: 0,
  articles: [],
};
