import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { ITEM_TEST_ID } from 'src/__mocks__/NewsList';
import {
  testData,
  ITEM_NUM_TEST_ID,
  DESCRIPTION_TEST_ID,
  PUBLISHER_TEST_ID,
  AUTHOR_TEST_ID,
  DETAILS_TEST_ID,
  LINK_TEST_ID,
} from 'src/__mocks__/NewsItem';
import { NewsItem } from 'src/components/NewsItem/NewsItem';
import RouterLayout from 'src/components/layouts/RouterLayout/RouterLayout';

describe('test NewsList component', (): void => {
  test('that item is present on the page', (): void => {
    render(
      <MemoryRouter>
        <NewsItem {...testData} />
      </MemoryRouter>
    );
    expect(screen.getByTestId(ITEM_TEST_ID)).toBeInTheDocument();
  });

  test('that item component renders the relevant card data', (): void => {
    render(
      <MemoryRouter>
        <NewsItem {...testData} />
      </MemoryRouter>
    );
    expect(screen.getByTestId(ITEM_NUM_TEST_ID)).toHaveTextContent(
      testData.itemNum
    );
    expect(screen.getByTestId(DESCRIPTION_TEST_ID)).toHaveTextContent(
      testData.description
    );
    expect(screen.getByTestId(PUBLISHER_TEST_ID)).toHaveTextContent(
      testData.publisher
    );
    expect(screen.getByTestId(AUTHOR_TEST_ID)).toHaveTextContent(
      testData.author
    );
  });

  test('that clicking on a link opens a detailed card component', (): void => {
    render(
      <MemoryRouter initialEntries={['/main/1']}>
        <RouterLayout />
        <NewsItem {...testData} />
      </MemoryRouter>
    );
    const link: HTMLAnchorElement = screen.getByTestId(LINK_TEST_ID);
    fireEvent.click(link);
    expect(screen.getByTestId(DETAILS_TEST_ID)).toBeInTheDocument();
  });
});
