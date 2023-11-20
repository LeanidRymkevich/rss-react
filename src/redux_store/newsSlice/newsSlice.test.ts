import { MOCK_RESPONSE } from 'src/__mocks__/FetchMocks';
import reducer, {
  setNews,
  setQuery,
  setPage,
  setLimit,
  setNewIsLoading,
} from 'src/redux_store/newsSlice/newsSlice';
import { initialState } from 'src/redux_store/newsSlice/types';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('setNews should set total and articles items into state', () => {
  expect(reducer(initialState, setNews(MOCK_RESPONSE))).toEqual({
    ...initialState,
    total: MOCK_RESPONSE.totalResults,
    articles: MOCK_RESPONSE.articles,
  });
});

test('should set query into state', () => {
  const query = 'query';
  expect(reducer(initialState, setQuery(query))).toEqual({
    ...initialState,
    query,
  });
});

test('setPage should set page into state', () => {
  const page = '1';
  expect(reducer(initialState, setPage(page))).toEqual({
    ...initialState,
    page,
  });
});

test('setLimit should set limit into state', () => {
  const limit = '10';
  expect(reducer(initialState, setLimit(limit))).toEqual({
    ...initialState,
    limit,
  });
});

test('setNewIsLoading should set isLoading into state', () => {
  const isLoading = false;
  expect(reducer(initialState, setNewIsLoading(isLoading))).toEqual({
    ...initialState,
    isLoading,
  });
});
