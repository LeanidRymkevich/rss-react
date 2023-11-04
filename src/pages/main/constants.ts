import { MainState } from './types';

const SEARCH_PLACEHOLDER = 'Write your request here';
const ERROR_BTN_TEXT = 'Throw an error';
const TITLE = 'New Searcher';
const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const DEFAULT_STATE: MainState = {
  query: '',
  results: [],
  total: 0,
  isNewsLoading: false,
  hasError: false,
};

export {
  SEARCH_PLACEHOLDER,
  ERROR_BTN_TEXT,
  TITLE,
  SEARCH_RESULT_TITLE_TEXT,
  DEFAULT_STATE,
};
