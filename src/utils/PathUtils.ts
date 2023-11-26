import { Pages, QUERY_PARAMS } from '@src/pages/types';
import { DEFAULT_QUERY_PARAMS } from '@src/redux_store/api/constants';

export interface QUERY_PARTS {
  [QUERY_PARAMS.PAGE]: string | string[] | undefined;
  [QUERY_PARAMS.ID]: string | string[] | undefined;
  [QUERY_PARAMS.LIMIT]: string | string[] | undefined;
  [QUERY_PARAMS.QUERY]: string | string[] | undefined;
}

export interface NORMALIZED_QUERY_PARTS {
  [QUERY_PARAMS.PAGE]: string;
  [QUERY_PARAMS.ID]: string;
  [QUERY_PARAMS.LIMIT]: string;
  [QUERY_PARAMS.QUERY]: string;
}

const getNormalizedQueryParts = ({
  page,
  id,
  limit,
  query,
}: QUERY_PARTS): NORMALIZED_QUERY_PARTS => {
  return {
    [QUERY_PARAMS.PAGE]:
      typeof page === 'string' ? page : DEFAULT_QUERY_PARAMS.page,
    [QUERY_PARAMS.ID]: typeof id === 'string' ? id : '',
    [QUERY_PARAMS.LIMIT]:
      typeof limit === 'string' ? limit : DEFAULT_QUERY_PARAMS.limit,
    [QUERY_PARAMS.QUERY]:
      typeof query === 'string' ? query : DEFAULT_QUERY_PARAMS.query,
  };
};

const getPathQueryString = (
  query: string | undefined,
  limit?: string
): string => {
  let result = '';
  result = query ? `?${QUERY_PARAMS.QUERY}=${query}` : result;
  const char = result ? '&' : '?';
  result =
    result +
    char +
    `${QUERY_PARAMS.LIMIT}=${limit || DEFAULT_QUERY_PARAMS.limit}`;
  return result;
};

const getPath = (parts?: QUERY_PARTS): string => {
  if (!parts)
    return `/${Pages.MAIN}/${DEFAULT_QUERY_PARAMS.page}?${QUERY_PARAMS.LIMIT}/${DEFAULT_QUERY_PARAMS.limit}`;

  const { page, id, limit, query }: NORMALIZED_QUERY_PARTS =
    getNormalizedQueryParts(parts);
  const queryString: string = getPathQueryString(query, limit);
  const idPathPart = id ? `/${Pages.DETAILS}/${id}` : id;
  const path = `/${Pages.MAIN}/${page}` + idPathPart + queryString;

  return path;
};

export { getNormalizedQueryParts, getPathQueryString, getPath };
