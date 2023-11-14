import { ReactNode, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import 'src/components/UI/Pagination/pagination.scss';

import { calcPageAmount, createDigitsArray } from 'src/utils/NewsPageUtils';
import { PaginationProps } from 'src/components/UI/Pagination/types';

const Pagination = ({
  total,
  limit,
  pathTemplate,
}: PaginationProps): ReactNode => {
  const pageAmount = calcPageAmount(total, +limit);
  const bullets: number[] = useMemo(
    (): number[] => createDigitsArray(pageAmount),
    [pageAmount]
  );

  return (
    <div className="pagination">
      {bullets.map((digit: number): ReactNode => {
        return (
          <NavLink
            to={`/${pathTemplate}/${digit}`}
            key={digit}
            className="bullet"
          >
            {digit}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Pagination;
