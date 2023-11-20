import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'src/__mocks__/redux_test_helpers/renderWithProviders';
import { MemoryRouter } from 'react-router-dom';

import SearchBar from 'src/components/SearchBar/SearchBar';
import { SEARCH_BAR_TEST_ID } from 'src/__mocks__/SearchBar';

describe('Testing SearchBar component', (): void => {
  beforeAll(() => {
    renderWithProviders(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
  });

  test('SearchBar in the document', async () => {
    expect(screen.getByTestId(SEARCH_BAR_TEST_ID)).toBeInTheDocument();
  });
});
