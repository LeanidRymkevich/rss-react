import { Article } from 'src/utils/APIWorking/types';

export interface MainState {
  query: string;
  results: Article[];
  total: number;
  isNewsLoading: boolean;
  hasError: boolean;
  newsPerPage: string;
}
