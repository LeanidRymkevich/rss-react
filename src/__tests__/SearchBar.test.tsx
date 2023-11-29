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

import SearchBar from '@src/components/SearchBar/SearchBar';
import { SEARCH_BAR_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';

describe('Testing SearchBar component', (): void => {
  beforeEach((): Awaitable<HookCleanupCallback> => {
    render(
      <Provider store={makeStore()}>
        <SearchBar />
      </Provider>
    );
  });

  test('SearchBar in the document', async () => {
    expect(screen.getByTestId(SEARCH_BAR_TEST_ID)).toBeInTheDocument();
  });
});
