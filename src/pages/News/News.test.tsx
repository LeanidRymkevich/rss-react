import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders } from 'src/__mocks__/redux_test_helpers/renderWithProviders';
import { MemoryRouter } from 'react-router-dom';
import News from 'src/pages/News/News';
import { NEWS_TEST_ID } from 'src/__mocks__/News';

describe('Testing News component', (): void => {
  beforeAll(() => {
    renderWithProviders(
      <MemoryRouter>
        <News />
      </MemoryRouter>
    );
  });

  test('News in the document', async () => {
    expect(screen.getByTestId(NEWS_TEST_ID)).toBeInTheDocument();
  });
});
