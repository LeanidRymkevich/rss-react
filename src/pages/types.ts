export enum Pages {
  MAIN = 'main',
  DETAILS = 'details',
}

export enum INDEXES {
  MAIN = 'page',
  DETAILS = 'id',
}

export interface State {
  query: string;
  page: string;
  limit: string;
}

export const DEFAULT_STATE_VALUES: State = {
  query: '',
  page: '1',
  limit: '10',
};

export const DEFAULT_TITLE_TAG_TEXT = 'RSS-React';

export const DEFAULT_PATH = `/${Pages.MAIN}/${DEFAULT_STATE_VALUES.page}`;
