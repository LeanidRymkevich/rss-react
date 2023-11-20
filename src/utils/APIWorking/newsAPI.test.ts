import { MOCK_RESPONSE } from 'src/__mocks__/FetchMocks';
import { query, limit, page, result_1, result_2 } from 'src/__mocks__/newsAPI';
import { getArticleFromResponse, makeUrl } from 'src/utils/APIWorking/newsAPI';

describe('makeUrl function', (): void => {
  test('it returns correct path if query is passed', (): void => {
    expect(makeUrl(query, page, limit)).toBe(result_1);
  });

  test('it returns correct path if no query is passed', (): void => {
    expect(makeUrl('', page, limit)).toBe(result_2);
  });
});

describe('getArticleFromResponse function', (): void => {
  test('it returns correct result if all arguments is passed', (): void => {
    expect(getArticleFromResponse(1, MOCK_RESPONSE)).toEqual(
      MOCK_RESPONSE.articles![0]
    );
  });

  test('it returns null if no articles is passed', (): void => {
    expect(getArticleFromResponse(1, undefined)).toEqual(null);
  });
});
