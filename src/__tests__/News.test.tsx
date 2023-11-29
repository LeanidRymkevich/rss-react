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

import News from '@src/components/News/News';

import { NEWS_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';

describe('Testing News component', (): void => {
  beforeEach((): Awaitable<HookCleanupCallback> => {
    render(
      <Provider store={makeStore()}>
        <News />
      </Provider>
    );
  });

  test('News in the document', async () => {
    expect(screen.getByTestId(NEWS_TEST_ID)).toBeInTheDocument();
  });
});
