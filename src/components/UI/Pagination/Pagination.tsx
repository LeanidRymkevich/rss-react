import { ReactNode, useMemo } from 'react';
import { Link } from 'react-router-dom';

import styles from 'src/components/UI/Pagination/pagination.module.scss';

import { calcPageAmount, createDigitsArray } from 'src/utils/NewsPageUtils';
import { PaginationProps } from 'src/components/UI/Pagination/types';

const Pagination = ({
  total,
  limit,
  pathTemplate,
  page,
}: PaginationProps): ReactNode => {
  const pageAmount = calcPageAmount(total, +limit);
  const bullets: number[] = useMemo(
    (): number[] => createDigitsArray(pageAmount),
    [pageAmount]
  );

  return (
    <div className={styles.pagination}>
      {bullets.map((digit: number): ReactNode => {
        return (
          <Link
            to={window.location.origin + `/${pathTemplate}/` + digit}
            key={digit}
            className={
              +(page || '1') === digit
                ? [styles.bullet, styles.bullet_active].join(' ')
                : styles.bullet
            }
          >
            {digit}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
