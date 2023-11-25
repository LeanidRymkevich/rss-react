import { FC } from 'react';
import Link from 'next/link';

import scss from '@src/components/UI/FallbackUI/FallbackUI.module.scss';
import styles from '@src/components/SearchBar/SearchBar.module.scss';

import { DEFAULT_PATH } from '@src/pages/types';

const FALLBACK_MESSAGE = '404 Page Not Found!';
const BTN_TEXT = 'Go to main >';

const NotFound: FC<void> = (): JSX.Element => {
  return (
    <div className={scss.fallbackUI}>
      <p className={scss.text}>{FALLBACK_MESSAGE}</p>
      <Link href={DEFAULT_PATH} className={styles.btn}>
        {BTN_TEXT}
      </Link>
    </div>
  );
};

export default NotFound;
