import { FC } from 'react';
import { useSelector } from 'react-redux';

import styles from '@src/pages/Main/Main.module.css';

import { FormDataItem } from '@src/store/FormDataSlice/types';
import { Pages } from '@src/Router/types';

import { selectForDataItems } from '@src/store/FormDataSlice/FormDataSlice';
import Card from '@src/components/Card/Card';

const Main: FC = (): JSX.Element => {
  const items: FormDataItem[] = useSelector(selectForDataItems);
  const reversed: FormDataItem[] = Array.from(items).reverse();

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{`${Pages.MAIN} Page`}</h2>
      <div className={styles.cards}>
        {reversed.map(
          (item: FormDataItem, idx: number): JSX.Element => (
            <Card key={idx} {...{ data: item, id: items.length - idx }} />
          )
        )}
      </div>
    </div>
  );
};

export default Main;
