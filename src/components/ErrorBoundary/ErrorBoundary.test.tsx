import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TestComponentForErrorBoundary } from 'src/__mocks__/ErrorBoundary';
import { FALLBACK_TEST_ID, PARAGRAPH_TEST_ID } from 'src/__mocks__/FallbackUI';
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary';
import {
  BTN_TEXT,
  FALLBACK_MESSAGE,
} from 'src/components/UI/FallbackUI/FallbackUI';

describe('ErrorBoundary test', (): void => {
  test('if error occurs there is Fallback UI with text', (): void => {
    try {
      render(
        <ErrorBoundary>
          <div>
            <TestComponentForErrorBoundary />
          </div>
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
