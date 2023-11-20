import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'src/__mocks__/redux_test_helpers/renderWithProviders';
import { MemoryRouter } from 'react-router-dom';

import { PAGINATION_TEST_ID } from 'src/__mocks__/Pagination';
import Pagination from 'src/components/UI/Pagination/Pagination';

describe('Pagination Details component', (): void => {
  beforeAll(() => {
    renderWithProviders(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );
  });

  test('Pagination in the document', async () => {
    expect(screen.getByTestId(PAGINATION_TEST_ID)).toBeInTheDocument();
  });
});
