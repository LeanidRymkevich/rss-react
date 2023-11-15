import {
  mockInput_1,
  mockInput_2,
  mockOutput_1,
  mockOutput_2,
} from 'src/__mocks__/NewsPageUtils';
import {
  getNewsItemProps,
  calcPageAmount,
  createDigitsArray,
  setNewsRecords,
} from 'src/utils/NewsPageUtils';

describe('Tests for getNewsItemProps function', (): void => {
  test('it returns appropriate values', (): void => {
    expect(getNewsItemProps(mockInput_1)).toEqual(mockOutput_1);
  });

  test('it returns "none" string for null properties', (): void => {
    expect(getNewsItemProps(mockInput_2)).toEqual(mockOutput_2);
  });
});

describe('Tests for calcPageAmount function', (): void => {
  test('it returns appropriate value if total <= FREE_API_RESULTS_LIMIT', (): void => {
    const limit = 10;
    const total = 100;
    const pages = 10;
    expect(calcPageAmount(total, limit)).toEqual(pages);
  });

  test('it returns appropriate value if total > FREE_API_RESULTS_LIMIT', (): void => {
    const limit = 10;
    const total = 1000;
    const pages = 10;
    expect(calcPageAmount(total, limit)).toEqual(pages);
  });
});

describe('Tests for createDigitsArray function', (): void => {
  test('it returns appropriate value', (): void => {
    const number = 10;
    const result: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(createDigitsArray(number)).toEqual(result);
  });
});

describe('Tests for setNewsRecords function', (): void => {
  test('it call setRecord function 3 times', (): void => {
    const fake = jest.fn((): void => setNewsRecords('Query', '1', '10'));
    fake();
    expect(fake).toHaveReturnedWith(undefined);
  });
});
