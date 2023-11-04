import { ReactNode } from 'react';
import scss from 'src/components/ErrorBoundary/FallbackUI.module.scss';
import styles from 'src/pages/main/main.module.scss';
import Button from 'src/components/UI/Button/Button';

const FALLBACK_MESSAGE =
  'Something goes wrong! To reload page press the button below.';
const BTN_TEXT = 'Reload';

const FallbackUI = (): ReactNode => {
  const reload = (): void => {
    window.location.reload();
  };

  return (
    <div className={scss.fallbackUI}>
      <p className={scss.text}>{FALLBACK_MESSAGE}</p>
      <Button className={styles.btn} onClick={reload}>
        {BTN_TEXT}
      </Button>
    </div>
  );
};

export default FallbackUI;
