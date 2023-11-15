import { APIResponse, Article } from 'src/utils/APIWorking/types';
import * as constants from 'src/utils/APIWorking/constants';
import { state } from 'src/utils/StorageWorking/StorageWorking';

export function makeUrl(query: string, page: string, limit: string): URL {
  let url: URL;

  if (query) {
    url = new URL(constants.EVERYTHING_ENDPOINT);
    url.searchParams.set(constants.SEARCH_PARAM, query);
  } else {
    url = new URL(constants.TOP_HEADLINES_ENDPOINT);
  }

  url.searchParams.set(constants.LANGUAGE_PARAM, constants.LANGUAGE);
  url.searchParams.set(constants.ITEMS_PER_PAGE_PARAM, limit);
  url.searchParams.set(constants.PAGE_NUMBER_PARAM, `${page}`);
  url.searchParams.set(constants.API_KEY_PARAM, constants.API_KEY);

  return url;
}

export async function getArticles(
  query: string,
  page: string,
  limit: string
): Promise<APIResponse> {
  const response: Response = await fetch(makeUrl(query, page, limit));
  const apiResponse: APIResponse = await response.json();
  return apiResponse;
}

export async function getArticle(
  id: number,
  page: string,
  limit: string
): Promise<Article> {
  const { query } = state;
  const apiResponse: APIResponse = await getArticles(query, page, limit);
  const articles: Article[] | undefined = apiResponse.articles;
  if (!articles) throw new Error('Error ing getArticle');
  return articles[id - 1];
}
