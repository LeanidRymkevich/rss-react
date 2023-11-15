import { loadState, setRecord } from './StorageWorking';
import { DEFAULT_STATE } from './types';

type getItemType = (key: string) => string | null;

describe('testing StorageWorking functions', (): void => {
  test('if getItem returns null this value is set to default', (): void => {
    const realFunc: getItemType = window.localStorage.getItem;
    window.localStorage.getItem = (): string | null => null;
    expect(loadState()).toEqual(DEFAULT_STATE);
    window.localStorage.getItem = realFunc;
  });

  test('a value passed to setRecord is saving in localStorage', (): void => {
    const value = '1';
    const key = 'number';
    setRecord(key, value);
    expect(localStorage.getItem(key)).toBe(value);
  });
});
