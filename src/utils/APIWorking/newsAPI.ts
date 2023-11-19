import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  APIQueryParams,
  APIResponse,
  Article,
} from 'src/utils/APIWorking/types';
import * as constants from 'src/utils/APIWorking/constants';

export function makeUrl(query: string, page: string, limit: string): string {
  const endpoint: string = query
    ? constants.EVERYTHING_ENDPOINT
    : constants.TOP_HEADLINES_ENDPOINT;

  return (
    endpoint +
    `?${constants.LANGUAGE_PARAM}=${constants.LANGUAGE}` +
    `&${constants.ITEMS_PER_PAGE_PARAM}=${limit}` +
    `&${constants.PAGE_NUMBER_PARAM}=${page}` +
    `&${constants.API_KEY_PARAM}=${constants.API_KEY}`
  );
}

export const newsAPI = createApi({
  reducerPath: 'newsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query<APIResponse, APIQueryParams>({
      query: (
        { query, page, limit }: APIQueryParams = constants.DEFAULT_QUERY_PARAMS
      ) => makeUrl(query, page, limit),
    }),
  }),
});

export const { useGetAllNewsQuery } = newsAPI;

export const getArticleFromResponse = (
  id: number,
  response: APIResponse
): Article | null => {
  const articles: Article[] | undefined = response.articles;
  return articles ? articles[id] : null;
};
