import { Article } from 'src/utils/APIWorking/types';
import { state } from 'src/utils/StorageWorking/StorageWorking';

export interface NewsState {
  isLoading: boolean;
  query: string;
  page: string;
  limit: string;
  total: number;
  articles: Article[];
}

export const initialState: NewsState = {
  isLoading: true,
  ...state,
  total: 0,
  articles: [],
};
