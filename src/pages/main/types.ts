import { Article } from 'src/utils/APIWorking/types';

export interface MainState {
  query: string;
  results: Article[];
  total: number;
}

const SEARCH_PLACEHOLDER = 'Write your request here';
const ERROR_BTN_TEXT = 'Throw an error';
const TITLE = 'New Searcher';
const SEARCH_RESULT_TITLE_TEXT = 'Search results';

export { SEARCH_PLACEHOLDER, ERROR_BTN_TEXT, TITLE, SEARCH_RESULT_TITLE_TEXT };
