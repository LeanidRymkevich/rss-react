import { DEFAULT_QUERY_PARAMS } from '@src/redux_store/api/constants';

export enum Pages {
  MAIN = 'main',
  DETAILS = 'details',
}

export enum INDEXES {
  MAIN = 'page',
  DETAILS = 'id',
}

export const DEFAULT_TITLE_TAG_TEXT = 'RSS-React';

export const DEFAULT_PATH = `/${Pages.MAIN}/${DEFAULT_QUERY_PARAMS.page}`;
