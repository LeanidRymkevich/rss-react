import { INewsContext } from 'src/pages/News/types';
import { state } from 'src/utils/StorageWorking/StorageWorking';

const SEARCH_RESULT_TITLE_TEXT = 'Search results';

const DEFAULT_NEWS_CONTEXT: INewsContext = {
  ...state,
  total: 0,
  articles: [],
};

export { SEARCH_RESULT_TITLE_TEXT, DEFAULT_NEWS_CONTEXT };
