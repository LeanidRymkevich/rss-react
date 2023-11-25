import { FC } from 'react';

import styles from '@src/components/UI/Loader/Loader.module.scss';

const Loader: FC<object> = (): JSX.Element => {
  return (
    <div data-testid="loader-wrapper" className={styles.loader_wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
