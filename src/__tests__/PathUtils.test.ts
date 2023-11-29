import { describe, expect, test } from 'vitest';

import { QUERY_PARTS, getPath } from '@src/utils/PathUtils';
import { Pages, QUERY_PARAMS } from '@src/pages/types';
import { DEFAULT_QUERY_PARAMS } from '@src/redux_store/api/constants';

import {
  getNormalizedQueryParts,
  getPathQueryString,
} from '@src/utils/PathUtils';

import { notFittingParts, parts } from '@src/__tests__/__mocks__/PathUtils';

describe('Testing getNormalizedQueryParts function', (): void => {
  test(`it returns default values when input values don't fitted`, (): void => {
    const result: QUERY_PARTS = {
      ...DEFAULT_QUERY_PARAMS,
      id: '',
    };
    expect(getNormalizedQueryParts(notFittingParts)).toEqual(result);
  });

  test(`it returns expected values`, (): void => {
    expect(getNormalizedQueryParts(parts)).toEqual(parts);
  });
});

describe('Testing getPathQueryString function', (): void => {
  test(`it returns expected value`, (): void => {
    const query = 'query';
    const limit = '10';
    const result = `?${QUERY_PARAMS.QUERY}=${query}&${QUERY_PARAMS.LIMIT}=${limit}`;
    expect(getPathQueryString(query, limit)).toBe(result);
  });

  test(`it returns expected value if no query have been passed`, (): void => {
    const query = undefined;
    const limit = '10';
    const result = `?${QUERY_PARAMS.LIMIT}=${limit}`;
    expect(getPathQueryString(query, limit)).toBe(result);
  });
  test(`it returns expected value if no limit have been passed`, (): void => {
    const query = 'query';
    const limit = undefined;
    const result = `?${QUERY_PARAMS.QUERY}=${query}&${QUERY_PARAMS.LIMIT}=${DEFAULT_QUERY_PARAMS.limit}`;
    expect(getPathQueryString(query, limit)).toBe(result);
  });
});

describe('Testing getPath function', (): void => {
  test(`it it returns expected value`, (): void => {
    const parts: QUERY_PARTS = {
      [QUERY_PARAMS.PAGE]: '1',
      [QUERY_PARAMS.ID]: '11',
      [QUERY_PARAMS.LIMIT]: '10',
      [QUERY_PARAMS.QUERY]: 'query',
    };
    const result = `/${Pages.MAIN}/${parts.page}/${Pages.DETAILS}/${parts.id}?${QUERY_PARAMS.QUERY}=${parts.query}&${QUERY_PARAMS.LIMIT}=${parts.limit}`;
    expect(getPath(parts)).toBe(result);
  });

  test(`it it returns expected value if undefined have been passed`, (): void => {
    const result = `/${Pages.MAIN}/${DEFAULT_QUERY_PARAMS.page}?${QUERY_PARAMS.LIMIT}/${DEFAULT_QUERY_PARAMS.limit}`;
    expect(getPath(undefined)).toBe(result);
  });

  test(`it it returns expected value if no id have been passed`, (): void => {
    const parts: QUERY_PARTS = {
      [QUERY_PARAMS.PAGE]: '1',
      [QUERY_PARAMS.ID]: undefined,
      [QUERY_PARAMS.LIMIT]: '10',
      [QUERY_PARAMS.QUERY]: 'query',
    };
    const result = `/${Pages.MAIN}/${parts.page}?${QUERY_PARAMS.QUERY}=${parts.query}&${QUERY_PARAMS.LIMIT}=${parts.limit}`;
    expect(getPath(parts)).toBe(result);
  });
});
