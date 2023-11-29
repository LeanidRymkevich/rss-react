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

import Details from '@src/components/Details/Details';

import { DETAILS_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';

describe('Testing Details component', (): void => {
  beforeEach((): Awaitable<HookCleanupCallback> => {
    render(
      <Provider store={makeStore()}>
        <Details />
      </Provider>
    );
  });

  test('Details in the document', async () => {
    expect(screen.getByTestId(DETAILS_TEST_ID)).toBeInTheDocument();
  });
});
