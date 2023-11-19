import { RenderResult, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import queries from '@testing-library/dom/types/queries';

import FallbackUI, {
  BTN_TEXT,
  FALLBACK_MESSAGE,
} from 'src/components/UI/FallbackUI/FallbackUI';
import { FALLBACK_TEST_ID, PARAGRAPH_TEST_ID } from 'src/__mocks__/FallbackUI';

describe('Fallback component', (): void => {
  beforeEach(
    (): RenderResult<typeof queries, HTMLElement, HTMLElement> =>
      render(<FallbackUI />)
  );

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
