import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsContext from 'src/pages/News/NewsContext';
import { DEFAULT_NEWS_CONTEXT } from 'src/pages/News/constants';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from './SearchBar';
import { INPUT_TEST_ID, SEARCH_BAR_TEST_ID } from 'src/__mocks__/SearchBar';

describe('SearchBar test', (): void => {
  beforeEach((): void => {
    render(
      <MemoryRouter initialEntries={['/main/2']}>
        <NewsContext.Provider value={DEFAULT_NEWS_CONTEXT}>
          <SearchBar />
        </NewsContext.Provider>
      </MemoryRouter>
    );
  });

  test('SearchBar in the document', (): void => {
    expect(screen.getByTestId(SEARCH_BAR_TEST_ID)).toBeInTheDocument();
  });

  test('typed input value displayed in input', async () => {
    const input: HTMLInputElement = screen.getByTestId(INPUT_TEST_ID);

    fireEvent.change(input, { target: { value: '1' } });
    expect(input.value).toBe('1');
  });
});
