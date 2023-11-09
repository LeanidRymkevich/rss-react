import { SelectParams } from 'src/components/UI/Select/types';
import { INewsContext } from 'src/pages/News/types';
import { state } from 'src/utils/StorageWorking/StorageWorking';

const SEARCH_PLACEHOLDER = 'Write your request here';
const ERROR_BTN_TEXT = 'Throw an error';
const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const SELECT_PARAMS: Pick<SelectParams, 'defaultOption' | 'options'> = {
  defaultOption: 'News per page',
  options: [
    { name: '5', value: '5' },
    { name: '10', value: '10' },
    { name: '20', value: '20' },
  ],
};

const DEFAULT_NEWS_CONTEXT: INewsContext = {
  ...state,
  total: 0,
  articles: [],
};

export {
  SEARCH_PLACEHOLDER,
  ERROR_BTN_TEXT,
  SEARCH_RESULT_TITLE_TEXT,
  SELECT_PARAMS,
  DEFAULT_NEWS_CONTEXT,
};
