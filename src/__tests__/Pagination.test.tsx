import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  describe,
  expect,
  test,
  beforeEach,
  HookCleanupCallback,
  Awaitable,
} from 'vitest';
import { Provider } from 'react-redux';

import { makeStore } from '@src/redux_store/store';

import Pagination from '@src/components/UI/Pagination/Pagination';

import { DEFAULT_QUERY_PARAMS } from '@src/redux_store/api/constants';

import {
  PAGINATION_TEST_ID,
  BULLET_TEST_ID,
} from '@src/__tests__/__mocks__/TEST_IDs';

const articleAmount = 100;

describe('Pagination Details component', (): void => {
  beforeEach((): Awaitable<HookCleanupCallback> => {
    render(
      <Provider store={makeStore()}>
        <Pagination total={articleAmount} />
      </Provider>
    );
  });

  test('Pagination in the document', async () => {
    expect(screen.getByTestId(PAGINATION_TEST_ID)).toBeInTheDocument();
  });

  test('Certain amount of bullets in the document', async () => {
    expect(screen.getAllByTestId(BULLET_TEST_ID).length).toBe(
      articleAmount / +DEFAULT_QUERY_PARAMS.limit
    );
  });
});
