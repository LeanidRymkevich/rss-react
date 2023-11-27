import { expect, test } from 'vitest';

import { capitalizeFirstLetter } from '@src/utils/StringTransformations';

test('capitalizeFirstLetter returns appropriate value', (): void => {
  const word = 'word';
  const result = 'Word';
  expect(capitalizeFirstLetter(word)).toBe(result);
});
