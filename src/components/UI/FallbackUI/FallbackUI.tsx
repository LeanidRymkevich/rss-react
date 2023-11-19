import { ReactNode } from 'react';

import scss from 'src/components/UI/FallbackUI/FallbackUI.module.scss';
import styles from 'src/components/SearchBar/SearchBar.module.scss';

import Button from 'src/components/UI/Button/Button';
import { FALLBACK_TEST_ID, PARAGRAPH_TEST_ID } from 'src/__mocks__/FallbackUI';

export const FALLBACK_MESSAGE =
  'Something goes wrong! To reload page press the button below.';
export const BTN_TEXT = 'Reload';

const FallbackUI = (): ReactNode => {
  const reload = (): void => {
    window.location.reload();
  };

  return (
    <div data-testid={FALLBACK_TEST_ID} className={scss.fallbackUI}>
      <p data-testid={PARAGRAPH_TEST_ID} className={scss.text}>
        {FALLBACK_MESSAGE}
      </p>
      <Button className={styles.btn} onClick={reload}>
        {BTN_TEXT}
      </Button>
    </div>
  );
};

export default FallbackUI;
