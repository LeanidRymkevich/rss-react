import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';

import ErrorBoundary from '@src/components/ErrorBoundary/ErrorBoundary';

import {
  BTN_TEXT,
  FALLBACK_MESSAGE,
} from '@src/components/UI/FallbackUI/FallbackUI';

import { TestComponentForErrorBoundary } from '@src/__tests__/__mocks__/ErrorBoundary';
import {
  FALLBACK_TEST_ID,
  PARAGRAPH_TEST_ID,
} from '@src/__tests__/__mocks__/TEST_IDs';

describe('ErrorBoundary test', (): void => {
  test('if error button are pressed -> error occurs and Fallback UI with text appears', (): void => {
    try {
      render(
        <ErrorBoundary>
          <TestComponentForErrorBoundary />
        </ErrorBoundary>
      );

      const errorBtn: HTMLButtonElement = screen.getByRole('button');
      fireEvent.click(errorBtn);
    } catch {
      const fallbackUI: HTMLElement = screen.getByTestId(FALLBACK_TEST_ID);
      const paragraph: HTMLElement = screen.getByTestId(PARAGRAPH_TEST_ID);
      const fallbackBtn: HTMLElement = screen.getByText(BTN_TEXT);

      expect(fallbackUI).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
      expect(fallbackBtn).toBeInTheDocument();
      expect(paragraph).toHaveTextContent(FALLBACK_MESSAGE);
    }
  });
});
