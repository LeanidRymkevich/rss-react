import { getRidOfDetailsInPath } from 'src/utils/MainPageUtils';

test('Main page utils tests', (): void => {
  const path = '/main/1/details/1';
  expect(getRidOfDetailsInPath(path)).toEqual('/main/1');
});
