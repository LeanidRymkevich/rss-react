import { articles } from 'src/__mocks__/NewsList';
import reducer, {
  setDetails,
  setDetailsLoading,
} from 'src/redux_store/detailsSlice/detailsSlice';
import { initialState } from 'src/redux_store/detailsSlice/types';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('setDetails should set article into state', () => {
  expect(reducer(initialState, setDetails(articles[0]))).toEqual({
    ...initialState,
    article: articles[0],
  });
});

test('setDetailsLoading should set isLoading into state', () => {
  const isLoading = false;
  expect(reducer(initialState, setDetailsLoading(isLoading))).toEqual({
    ...initialState,
    isLoading,
  });
});
