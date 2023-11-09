import { Article } from 'src/utils/APIWorking/types';

export interface INewsContext {
  query: string;
  articles: Article[];
  page: string;
  limit: string;
  total: number;
}
