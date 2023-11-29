import '@testing-library/jest-dom';

import { setupServer } from 'msw/node';
import { http, HttpResponse, StrictResponse } from 'msw';
import mockRouter from 'next-router-mock';
import { createDynamicRouteParser } from 'next-router-mock/dynamic-routes';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

import { makeStore } from './src/redux_store/store';
import { newsApi } from './src/redux_store/api/newsApi';

import {
  BASE_URL,
  EVERYTHING_ENDPOINT,
  TOP_HEADLINES_ENDPOINT,
} from './src/redux_store/api/constants';
import { MOCK_RESPONSE } from './src/__tests__/__mocks__/ApiRespMock';
import { APIResponse } from './src/redux_store/api/types';

export const handlers = [
  http.get(
    `${BASE_URL}${EVERYTHING_ENDPOINT}`,
    async (): Promise<StrictResponse<APIResponse>> => {
      return HttpResponse.json(MOCK_RESPONSE);
    }
  ),
  http.get(
    `${BASE_URL}${TOP_HEADLINES_ENDPOINT}`,
    async (): Promise<StrictResponse<APIResponse>> => {
      return HttpResponse.json(MOCK_RESPONSE);
    }
  ),
];

export const server = setupServer(...handlers);

beforeEach(() => {
  makeStore().dispatch(newsApi.util.resetApiState());
  vi.mock('next/router', () => require('next-router-mock'));
  mockRouter.useParser(
    createDynamicRouteParser(['/', '/main/[page]', '/main/[page]/details/[id]'])
  );
});

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());
