import { Article } from 'src/utils/APIWorking/types';

export interface NewsState {
  inputValue: string;
  query: string;
  total: number;
  hasError: boolean;
  limit: string;
  page: string;
}

export interface INewsContext {
  query: string;
  articles: Article[];
  page: string;
  limit: string;
}
