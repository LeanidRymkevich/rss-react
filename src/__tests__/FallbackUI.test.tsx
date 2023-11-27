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

import FallbackUI, {
  BTN_TEXT,
  FALLBACK_MESSAGE,
} from '@src/components/UI/FallbackUI/FallbackUI';
import {
  FALLBACK_TEST_ID,
  PARAGRAPH_TEST_ID,
} from '@src/__tests__/__mocks__/TEST_IDs';

describe('Fallback component', (): void => {
  beforeEach((): Awaitable<HookCleanupCallback> => {
    render(
      <Provider store={makeStore()}>
        <FallbackUI />
      </Provider>
    );
  });

  test(`it's in the document`, () => {
    expect(screen.getByTestId(FALLBACK_TEST_ID)).toBeInTheDocument();
  });

  test(`paragraph in the document`, () => {
    expect(screen.getByTestId(PARAGRAPH_TEST_ID)).toBeInTheDocument();
  });

  test(`paragraph contains fallback message`, () => {
    expect(screen.getByTestId(PARAGRAPH_TEST_ID)).toHaveTextContent(
      FALLBACK_MESSAGE
    );
  });

  test(`button in the document`, () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test(`button contains text`, () => {
    expect(screen.getByRole('button')).toHaveTextContent(BTN_TEXT);
  });
});
