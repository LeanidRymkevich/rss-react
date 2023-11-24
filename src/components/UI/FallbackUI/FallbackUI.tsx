import { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';

import scss from '@src/components/UI/FallbackUI/FallbackUI.module.scss';
import styles from '@src/components/SearchBar/SearchBar.module.scss';

import MyButton from '@src/components/UI/MyButton/MyButton';

export const FALLBACK_MESSAGE =
  'Something goes wrong! To reload page press the button below.';
export const BTN_TEXT = 'Reload';

const FallbackUI: FC<object> = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const reload = (): void => {
    router.reload();
  };

  return (
    <div className={scss.fallbackUI}>
      <p className={scss.text}>{FALLBACK_MESSAGE}</p>
      <MyButton className={styles.btn} onClick={reload}>
        {BTN_TEXT}
      </MyButton>
    </div>
  );
};

export default FallbackUI;
