import { ReactNode } from 'react';

import styles from 'src/components/UI/Loader/Loader.module.scss';
import { TEST_ID } from 'src/components/UI/Loader/Loader.test';

const Loader = (): ReactNode => {
  return (
    <div data-testid={TEST_ID} className={styles.loader_wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
