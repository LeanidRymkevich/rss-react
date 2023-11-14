import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import {
  BULLET_TEST_ID,
  PAGINATION_TEST_ID,
  props,
} from 'src/__mocks__/Pagination';
import RouterLayout from 'src/components/layouts/RouterLayout/RouterLayout';
import Pagination from 'src/components/UI/Pagination/Pagination';
import { Pages } from 'src/components/Router/Router';

describe('test Details card component', (): void => {
  beforeEach(() =>
    render(
      <MemoryRouter>
        <RouterLayout />
        <Pagination {...props} />
      </MemoryRouter>
    )
  );

  test('pagination is in the document', (): void => {
    expect(screen.getByTestId(PAGINATION_TEST_ID)).toBeInTheDocument();
  });

  test('pagination component updates URL query parameter when page changes', (): void => {
    const bullets: HTMLAnchorElement[] = screen.getAllByTestId(BULLET_TEST_ID);
    bullets.map(async (bullet: HTMLAnchorElement): Promise<void> => {
      new Promise(() => fireEvent.click(bullet)).then(() =>
        expect(window.location.pathname).toBe(
          `/${Pages.MAIN}/${bullet.textContent}`
        )
      );
    });
  });
});
