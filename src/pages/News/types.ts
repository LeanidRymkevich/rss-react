import { Article } from 'src/utils/APIWorking/types';

export interface MainState {
  query: string;
  articles: Article[];
  total: number;
  hasError: boolean;
  limit: string;
  page: string;
}
