import { ReactNode } from 'react';

import styles from '@src/styles/UI/Loader/Loader.module.scss';

const Loader = (): ReactNode => {
  return (
    <div data-testid="loader-wrapper" className={styles.loader_wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
