import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import scss from 'src/components/UI/FallbackUI/FallbackUI.module.scss';
import styles from 'src/components/SearchBar/SearchBar.module.scss';

const FALLBACK_MESSAGE = '404 Page Not Found!';
const BTN_TEXT = 'Go to main >';

export const NOT_FOUND_TEST_ID = 'not_found';

const NotFound = (): ReactNode => {
  return (
    <div data-testid={NOT_FOUND_TEST_ID} className={scss.fallbackUI}>
      <p className={scss.text}>{FALLBACK_MESSAGE}</p>
      <Link to="/" className={styles.btn}>
        {BTN_TEXT}
      </Link>
    </div>
  );
};

export default NotFound;
