import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { NOT_FOUND_TEST_ID } from './NotFound';
import App from 'src/App';

describe('test NotFound page', (): void => {
  test('Ensure that the 404 page is displayed when navigating to an invalid route', (): void => {
    render(
      <MemoryRouter initialEntries={['/not_existing_page']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId(NOT_FOUND_TEST_ID)).toBeInTheDocument();
  });
});
