import '@testing-library/jest-dom';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import { MOCK_RESPONSE } from './src/__mocks__/FetchMocks';

export const handlers = [
  http.get('https://newsapi.org/v2/everything', async () => {
    await delay(150);
    return HttpResponse.json(MOCK_RESPONSE);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
