type plotTypes = {
  [key: string]: string;
};

export interface State extends plotTypes {
  query: string;
  page: string;
  limit: string;
}

export const DEFAULT_STATE: State = {
  query: '',
  page: '1',
  limit: '10',
};
