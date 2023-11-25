import { DEFAULT_QUERY_PARAMS } from '@src/redux_store/api/constants';

export interface NewsState {
  query: string;
  page: string;
  limit: string;
  total: number;
}

export const initialState: NewsState = {
  ...DEFAULT_QUERY_PARAMS,
  total: 0,
};
