import { ReactNode } from 'react';

import scss from 'src/components/UI/FallbackUI/FallbackUI.module.scss';
import styles from 'src/pages/News/News.module.scss';

import Button from 'src/components/UI/Button/Button';

import {
  DIV_TEST_ID,
  P_TEST_ID,
} from 'src/components/UI/FallbackUI/FallbackUI.test';

export const FALLBACK_MESSAGE =
  'Something goes wrong! To reload page press the button below.';
export const BTN_TEXT = 'Reload';

const FallbackUI = (): ReactNode => {
  const reload = (): void => {
    window.location.reload();
  };

  return (
    <div data-testid={DIV_TEST_ID} className={scss.fallbackUI}>
      <p data-testid={P_TEST_ID} className={scss.text}>
        {FALLBACK_MESSAGE}
      </p>
      <Button className={styles.btn} onClick={reload}>
        {BTN_TEXT}
      </Button>
    </div>
  );
};

export default FallbackUI;
