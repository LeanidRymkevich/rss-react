import { fireEvent, render, screen } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import RouterLayout from 'src/components/layouts/RouterLayout/RouterLayout';
import { NOT_FOUND_TEST_ID } from './NotFound';

const testID = 'link';

describe('test NotFound page', (): void => {
  test('Ensure that the 404 page is displayed when navigating to an invalid route', (): void => {
    render(
      <MemoryRouter initialEntries={['/not_existing_page']}>
        <RouterLayout />
        <Link data-testid={testID} to="/not_existing_page"></Link>
      </MemoryRouter>
    );

    const link: HTMLAnchorElement = screen.getByTestId(testID);
    new Promise(() => fireEvent.click(link)).then(() =>
      expect(screen.getByTestId(NOT_FOUND_TEST_ID)).toBeInTheDocument()
    );
  });
});
