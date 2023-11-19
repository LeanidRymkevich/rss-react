import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  APIQueryParams,
  APIResponse,
  Article,
  NewsReducerPaths,
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
  reducerPath: NewsReducerPaths.ROOT,
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }),
  endpoints: (builder) => ({
    [NewsReducerPaths.GET_ALL_NEWS]: builder.query({
      query: (
        { query, page, limit }: APIQueryParams = constants.DEFAULT_QUERY_PARAMS
      ) => makeUrl(query, page, limit),
    }),
    [NewsReducerPaths.GET_NEWS_BY_ID]: builder.query({
      // query: ({ id, query, page, limit }) => makeUrl(query, page, limit),
      queryFn: async (id, query, page, limit) => {
        try {
          const response: APIResponse = await newsAPI.endpoints[
            NewsReducerPaths.GET_ALL_NEWS
          ](query, page, limit);
          // Return the result in an object with a `data` field
          const articles: Article[] | undefined = response.articles;
          if (!articles) throw new Error('No data for that request!');
          return articles[id];
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetAllNewsQuery, useGetNewsByIDQuery } = newsAPI;
