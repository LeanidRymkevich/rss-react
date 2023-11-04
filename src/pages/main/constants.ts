import { SelectParams } from 'src/components/UI/Select/types';
import { MainState } from 'src/pages/Main/types';

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
  newsPerPage: '10',
};

const SELECT_PARAMS: Pick<SelectParams, 'defaultOption' | 'options'> = {
  defaultOption: 'News per page',
  options: [
    { name: '5', value: '5' },
    { name: '10', value: '10' },
    { name: '20', value: '20' },
  ],
};

export {
  SEARCH_PLACEHOLDER,
  ERROR_BTN_TEXT,
  TITLE,
  SEARCH_RESULT_TITLE_TEXT,
  DEFAULT_STATE,
  SELECT_PARAMS,
};
