import { APIQueryParams } from './types';

const API_KEY = '5550efb72e164f1e897f92fd9ecd2386'; // backup key '8797a943de9744cb8236fd189392092c'
const API_KEY_PARAM = 'apiKey';

const BASE_URL = 'https://newsapi.org/v2/';
const EVERYTHING_ENDPOINT = 'everything';
const TOP_HEADLINES_ENDPOINT = 'top-headlines';

const LANGUAGE_PARAM = 'language';
const LANGUAGE = 'en';

const FREE_API_RESULTS_LIMIT = 100;
const ITEMS_PER_PAGE_PARAM = 'pageSize';

const PAGE_NUMBER_PARAM = 'page';
const SEARCH_PARAM = 'q';

const DEFAULT_QUERY_PARAMS: APIQueryParams = {
  query: '',
  page: '1',
  limit: '10',
};

export {
  API_KEY_PARAM,
  API_KEY,
  EVERYTHING_ENDPOINT,
  TOP_HEADLINES_ENDPOINT,
  LANGUAGE_PARAM,
  LANGUAGE,
  ITEMS_PER_PAGE_PARAM,
  PAGE_NUMBER_PARAM,
  SEARCH_PARAM,
  FREE_API_RESULTS_LIMIT,
  DEFAULT_QUERY_PARAMS,
  BASE_URL,
};
