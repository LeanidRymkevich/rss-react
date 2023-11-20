import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'src/__mocks__/redux_test_helpers/renderWithProviders';
import { MemoryRouter } from 'react-router-dom';

import MainLayout from 'src/components/layouts/MainLayout/MainLayout';
import { MAIN_LAYOUT_TEST_ID } from 'src/__mocks__/MainLayout';

describe('Testing MainLayout component', (): void => {
  beforeAll(() => {
    renderWithProviders(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
  });

  test('MainLayout in the document', async () => {
    expect(screen.getByTestId(MAIN_LAYOUT_TEST_ID)).toBeInTheDocument();
  });
});
