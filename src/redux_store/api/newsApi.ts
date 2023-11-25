import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import {
  APIResponse,
  APIQueryParams,
  Article,
} from '@src/redux_store/api/types';

import * as constants from '@src/redux_store/api/constants';
import { REDUCERS_NAMES } from '@src/redux_store/types';

export function makeUrl(query: string, page: string, limit: string): string {
  const endpoint: string = query
    ? constants.EVERYTHING_ENDPOINT
    : constants.TOP_HEADLINES_ENDPOINT;
  const search: string = query ? `${constants.SEARCH_PARAM}=${query}` : '';
  const params =
    `${constants.LANGUAGE_PARAM}=${constants.LANGUAGE}` +
    `&${constants.ITEMS_PER_PAGE_PARAM}=${limit}` +
    `&${constants.PAGE_NUMBER_PARAM}=${page}` +
    `&${constants.API_KEY_PARAM}=${constants.API_KEY}`;
  return search ? `${endpoint}?${search}&${params}` : `${endpoint}?${params}`;
}

export const newsApi = createApi({
  reducerPath: REDUCERS_NAMES.NEWS_API,
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getAllNews: builder.query<APIResponse, APIQueryParams>({
      query: (
        { query, page, limit }: APIQueryParams = constants.DEFAULT_QUERY_PARAMS
      ) => makeUrl(query, page, limit),
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  util: { getRunningQueriesThunk },
} = newsApi;

export const { getAllNews } = newsApi.endpoints;

export const getArticleFromResponse = (
  id: number,
  response: APIResponse | undefined
): Article | null => {
  if (!response) return null;
  const articles: Article[] | undefined = response.articles;
  return articles ? articles[id - 1] : null;
};
