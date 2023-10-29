import { Article } from 'src/utils/APIWorking/types';

export interface MainState {
  query: string;
  results: Article[];
}
