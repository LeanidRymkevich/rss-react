import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from '@src/pages/NotFound/NotFound.module.css';

import { Pages, Paths } from '@src/Router/types';

const FALLBACK_MESSAGE = '404 Page Not Found!';
const BTN_TEXT = 'Go to main >';

const NotFound: FC = (): JSX.Element => {
  return (
    <div className={styles.not_found}>
      <p className={styles.title}>{FALLBACK_MESSAGE}</p>
      <Link className={styles.link} to={Paths[Pages.MAIN]}>
        {BTN_TEXT}
      </Link>
    </div>
  );
};

export default NotFound;
