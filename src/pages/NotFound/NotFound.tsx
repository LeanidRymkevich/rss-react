import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Pages, Paths } from '@src/Router/types';

const FALLBACK_MESSAGE = '404 Page Not Found!';
const BTN_TEXT = 'Go to main >';

const NotFound: FC = (): JSX.Element => {
  return (
    <div>
      <p>{FALLBACK_MESSAGE}</p>
      <Link to={Paths[Pages.MAIN]}>{BTN_TEXT}</Link>
    </div>
  );
};

export default NotFound;
