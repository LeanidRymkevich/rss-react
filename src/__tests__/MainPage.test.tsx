import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import mockRouter from 'next-router-mock';

import { makeStore } from '@src/redux_store/store';

import { getPath } from '@src/utils/PathUtils';

import MainPage from '@src/pages/main/[page]';

import {
  PAGINATION_TEST_ID,
  LIST_TEST_ID,
  SEARCH_BAR_TEST_ID,
  NAV_BAR_TEST_ID,
  HEADER_TEST_ID,
  MAIN_SECTION_TEST_ID,
} from '@src/__tests__/__mocks__/TEST_IDs';

describe('Testing Details component', (): void => {
  beforeEach(async () => {
    await mockRouter.push(getPath(undefined));
    render(
      <Provider store={makeStore()}>
        <MainPage />
      </Provider>
    );
  });

  test('Pagination in the document', async () => {
    expect(screen.getByTestId(PAGINATION_TEST_ID)).toBeInTheDocument();
  });

  test('News list in the document', async () => {
    waitFor(() => expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument());
  });

  test('Search bar in the document', async () => {
    expect(screen.getByTestId(SEARCH_BAR_TEST_ID)).toBeInTheDocument();
  });

  test('Navigation bar in the document', async () => {
    expect(screen.getByTestId(NAV_BAR_TEST_ID)).toBeInTheDocument();
  });

  test('Header in the document', async () => {
    expect(screen.getByTestId(HEADER_TEST_ID)).toBeInTheDocument();
  });

  test('Main section in the document', async () => {
    expect(screen.getByTestId(MAIN_SECTION_TEST_ID)).toBeInTheDocument();
  });
});
