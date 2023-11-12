import { loadState } from './StorageWorking';

describe('testing loadState function', (): void => {
  test('it returns defined value', (): void => {
    expect(loadState()).toBeDefined();
  });
});
