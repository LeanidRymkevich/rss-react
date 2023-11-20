import { getRidOfDetailsInPath } from 'src/utils/MainPageUtils';

describe('GetRidOfDetailsInPath function', (): void => {
  test('it returns correct relative path', (): void => {
    const path = '/main/1/details/1';
    expect(getRidOfDetailsInPath(path)).toEqual('/main/1');
  });

  test('it returns slash when results in empty string', (): void => {
    const path = '/details/1';
    expect(getRidOfDetailsInPath(path)).toEqual('/');
  });
});
