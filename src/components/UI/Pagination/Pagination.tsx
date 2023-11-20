import { ReactNode, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import 'src/components/UI/Pagination/pagination.scss';

import { calcPageAmount, createDigitsArray } from 'src/utils/NewsPageUtils';
import { BULLET_TEST_ID, PAGINATION_TEST_ID } from 'src/__mocks__/Pagination';
import { Pages } from 'src/components/Router/Router';
import { useAppSelector } from 'src/hooks/reduxHooks';

const Pagination = (): ReactNode => {
  const total: number = useAppSelector((store) => store.news.total);
  const limit: string = useAppSelector((store) => store.news.limit);

  const pageAmount = calcPageAmount(total, +limit);
  const bullets: number[] = useMemo(
    (): number[] => createDigitsArray(pageAmount),
    [pageAmount]
  );

  return (
    <div data-testid={PAGINATION_TEST_ID} className="pagination">
      {bullets.map((digit: number): ReactNode => {
        return (
          <NavLink
            data-testid={BULLET_TEST_ID}
            to={`/${Pages.MAIN}/${digit}`}
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
