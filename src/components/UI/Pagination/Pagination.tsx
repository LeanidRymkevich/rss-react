import { FC, useMemo } from 'react';
import Link from 'next/link';

import styles from '@src/components/UI/Pagination/pagination.module.scss';

import { PaginationProps } from '@src/components/UI/Pagination/types';

import { calcPageAmount, createDigitsArray } from '@src/utils/NewsPageUtils';
import useRouterPath from '@src/hooks/useRouterPath';
import { getPath } from '@src/utils/PathUtils';

import {
  PAGINATION_TEST_ID,
  BULLET_TEST_ID,
} from '@src/__tests__/__mocks__/TEST_IDs';

const Pagination: FC<PaginationProps> = ({
  total,
}: PaginationProps): JSX.Element => {
  const { page, limit, id, query } = useRouterPath();

  const pageAmount = calcPageAmount(total || 0, +limit || 0);
  const bullets: number[] = useMemo(
    (): number[] => createDigitsArray(pageAmount),
    [pageAmount]
  );

  const getClasses = (digit: number): string => {
    return +page === digit
      ? `${styles.bullet} ${styles.bullet_active}`
      : styles.bullet;
  };

  return (
    <div data-testid={PAGINATION_TEST_ID} className={styles.pagination}>
      {bullets.map((digit: number): JSX.Element => {
        return (
          <Link
            data-testid={BULLET_TEST_ID}
            href={getPath({ page: `${digit}`, limit, id, query })}
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
