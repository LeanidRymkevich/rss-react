import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders } from 'src/__mocks__/redux_test_helpers/renderWithProviders';
import Details from 'src/pages/Details/Details';
import { DETAILS_TEST_ID } from 'src/__mocks__/NewsItem';
import { MemoryRouter } from 'react-router-dom';

describe('Testing Details component', (): void => {
  beforeAll(() => {
    renderWithProviders(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );
  });

  test('Details in the document', async () => {
    expect(screen.getByTestId(DETAILS_TEST_ID)).toBeInTheDocument();
  });
});
