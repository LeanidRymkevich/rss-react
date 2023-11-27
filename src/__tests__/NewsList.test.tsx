import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  describe,
  expect,
  test,
  beforeEach,
  HookCleanupCallback,
  Awaitable,
} from 'vitest';
import { Provider } from 'react-redux';

import { makeStore } from '@src/redux_store/store';

import { LIST_TEST_ID, ITEM_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';
import { articles } from '@src/__tests__/__mocks__/NewsList';

import { NewsList } from '@src/components/NewsList/NewsList';
import { NewsItemProps } from '@src/components/NewsItem/types';
import { getNewsItemProps } from '@src/utils/NewsPageUtils';

const itemsProps: NewsItemProps[] = getNewsItemProps(articles, '1', '10');

describe('test NewsList component', (): void => {
  beforeEach((): Awaitable<HookCleanupCallback> => {
    render(
      <Provider store={makeStore()}>
        <NewsList items={itemsProps} />
      </Provider>
    );
  });

  test('that list is present on the page', (): void => {
    expect(screen.getByTestId(LIST_TEST_ID)).toBeInTheDocument();
  });

  test('that list contains passed number of items', (): void => {
    expect(screen.getAllByTestId(ITEM_TEST_ID).length).toBe(articles.length);
  });
});
