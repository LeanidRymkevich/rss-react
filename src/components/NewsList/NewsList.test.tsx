import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LIST_TEST_ID, ITEM_TEST_ID, articles } from 'src/__mocks__/NewsList';

import { NewsList } from 'src/components/NewsList/NewsList';
import { getNewsItemProps } from 'src/utils/NewsPageUtils';
import { NewsItemProps } from '../NewsItem/types';
import { MemoryRouter } from 'react-router-dom';

const itemsProps: NewsItemProps[] = getNewsItemProps(articles, '1', '10');

describe('test NewsList component', (): void => {
  test('that list is present on the page', (): void => {
    render(
      <MemoryRouter>
        <NewsList items={itemsProps} />
      </MemoryRouter>
    );
    expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
  });

  test('that list contains passed number of items', (): void => {
    render(
      <MemoryRouter>
        <NewsList items={itemsProps} />
      </MemoryRouter>
    );
    expect(screen.getAllByTestId(ITEM_TEST_ID).length).toBe(articles.length);
  });
});
