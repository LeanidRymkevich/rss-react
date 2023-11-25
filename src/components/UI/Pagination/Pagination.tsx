import { FC, useMemo } from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

import styles from '@src/components/UI/Pagination/pagination.module.scss';

import { INDEXES, Pages } from '@src/pages/types';

import { calcPageAmount, createDigitsArray } from '@src/utils/NewsPageUtils';
import { useAppSelector } from '@src/hooks/ReduxHooks';

const Pagination: FC<object> = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const total: number = useAppSelector((store) => store.news.total);
  const limit: string = useAppSelector((store) => store.news.limit);

  const pageAmount = calcPageAmount(total, +limit);
  const bullets: number[] = useMemo(
    (): number[] => createDigitsArray(pageAmount),
    [pageAmount]
  );

  const getClasses = (digit: number): string => {
    const current: string = router.query[INDEXES.MAIN] as string;
    return +current === digit
      ? `${styles.bullet} ${styles.bullet_active}`
      : styles.bullet;
  };

  return (
    <div className={styles.pagination}>
      {bullets.map((digit: number): JSX.Element => {
        return (
          <Link
            href={`/${Pages.MAIN}/${digit}`}
            key={digit}
            className={getClasses(digit)}
          >
            {digit}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
