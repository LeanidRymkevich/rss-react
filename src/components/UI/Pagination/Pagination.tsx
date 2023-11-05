import { ReactNode, useMemo } from 'react';
import styles from 'src/components/UI/Pagination/pagination.module.scss';
import { PaginationProps } from 'src/components/UI/Pagination/types';
import { calcPageAmount, createDigitsArray } from 'src/utils/NewsPageUtils';

const Pagination = ({
  total,
  limit,
  page,
  onClick,
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
          <span
            key={digit}
            className={
              +page === digit
                ? [styles.bullet, styles.bullet_active].join(' ')
                : styles.bullet
            }
            onClick={onClick}
          >
            {digit}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
