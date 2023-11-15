import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import {
  LIST_TEST_ID,
  ITEM_TEST_ID,
  NO_RESULTS_TEST_ID,
  contextMock,
} from 'src/__mocks__/NewsList';

import {
  NewsList,
  NO_RESULT_FOUND_RESPONSE,
} from 'src/components/NewsList/NewsList';
import NewsContext from 'src/pages/News/NewsContext';
import { INewsContext } from 'src/pages/News/types';

describe('test NewsList component', (): void => {
  test('that list is present on the page', (): void => {
    render(
      <MemoryRouter>
        <NewsContext.Provider value={contextMock}>
          <NewsList />
        </NewsContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
  });

  test('that list contains passed number of items', (): void => {
    render(
      <MemoryRouter>
        <NewsContext.Provider value={contextMock}>
          <NewsList />
        </NewsContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByTestId(ITEM_TEST_ID).length).toBe(
      contextMock.articles.length
    );
  });

  test('that if no articles passed to component "no result"-message is present on the page', (): void => {
    const mockContext: INewsContext = contextMock;
    mockContext.articles = [];
    render(
      <MemoryRouter>
        <NewsContext.Provider value={mockContext}>
          <NewsList />
        </NewsContext.Provider>
      </MemoryRouter>
    );
    const paragraph: HTMLElement = screen.getByTestId(NO_RESULTS_TEST_ID);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(NO_RESULT_FOUND_RESPONSE);
  });
});
