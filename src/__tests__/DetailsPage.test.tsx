import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import mockRouter from 'next-router-mock';

import { makeStore } from '@src/redux_store/store';

import { getPath } from '@src/utils/PathUtils';

import DetailsPage from '@src/pages/main/[page]/details/[id]';

import {
  PAGINATION_TEST_ID,
  LIST_TEST_ID,
  DETAILS_TEST_ID,
} from '@src/__tests__/__mocks__/TEST_IDs';

describe('Testing Details component', (): void => {
  beforeEach(async () => {
    await mockRouter.push(getPath(undefined));
    render(
      <Provider store={makeStore()}>
        <DetailsPage />
      </Provider>
    );
  });

  test('Pagination in the document', async () => {
    expect(screen.getByTestId(PAGINATION_TEST_ID)).toBeInTheDocument();
  });

  test('News list in the document', async () => {
    waitFor(() => expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument());
  });

  test('Details bar in the document', async () => {
    expect(screen.getByTestId(DETAILS_TEST_ID)).toBeInTheDocument();
  });
});
