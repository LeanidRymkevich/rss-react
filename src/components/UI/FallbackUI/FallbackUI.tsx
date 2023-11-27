import { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';

import scss from '@src/components/UI/FallbackUI/FallbackUI.module.scss';
import styles from '@src/components/SearchBar/SearchBar.module.scss';

import MyButton from '@src/components/UI/MyButton/MyButton';

import {
  FALLBACK_TEST_ID,
  PARAGRAPH_TEST_ID,
} from '@src/__tests__/__mocks__/TEST_IDs';

export const FALLBACK_MESSAGE =
  'Something goes wrong! To reload page press the button below.';
export const BTN_TEXT = 'Reload';

const FallbackUI: FC<object> = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const reload = (): void => {
    router.reload();
  };

  return (
    <div data-testid={FALLBACK_TEST_ID} className={scss.fallbackUI}>
      <p data-testid={PARAGRAPH_TEST_ID} className={scss.text}>
        {FALLBACK_MESSAGE}
      </p>
      <MyButton className={styles.btn} onClick={reload}>
        {BTN_TEXT}
      </MyButton>
    </div>
  );
};

export default FallbackUI;
