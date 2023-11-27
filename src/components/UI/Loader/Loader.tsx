import { FC } from 'react';

import styles from '@src/components/UI/Loader/Loader.module.scss';

import { LOADER_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';

const Loader: FC<object> = (): JSX.Element => {
  return (
    <div data-testid={LOADER_TEST_ID} className={styles.loader_wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
