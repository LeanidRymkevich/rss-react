import { ReactNode } from 'react';

import styles from 'src/components/UI/Loader/Loader.module.scss';

const Loader = (): ReactNode => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
