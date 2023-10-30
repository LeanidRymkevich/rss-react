import { Article } from 'src/utils/APIWorking/types';

export interface MainState {
  query: string;
  results: Article[];
}

export const SEARCH_PLACEHOLDER = 'Write your request here';
export const ERROR_BTN_TEXT = 'Throw an error';
