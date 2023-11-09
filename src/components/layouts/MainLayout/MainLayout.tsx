import { ReactNode } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import styles from 'src/components/layouts/MainLayout/MainLayout.module.scss';

import { getRidOfDetailsInPath } from 'src/utils/MainPageUtils';

import { Pages } from 'src/components/Router/Router';
import News from 'src/pages/News/News';

const MainLayout = (): ReactNode => {
  const navigate = useNavigate();
  const location = useLocation();

  const onMainPageClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const path: string = location.pathname;

    if (!path.includes(Pages.DETAILS)) return;
    if (event.target instanceof HTMLAnchorElement) {
      const href: string = event.target.href;
      const relativeHref: string = href.slice(href.indexOf(Pages.DETAILS) - 1);
      if (relativeHref !== path) return;
    }

    const newPath: string = getRidOfDetailsInPath(path);

    navigate(newPath);
  };

  return (
    <div className={styles.main_wrapper} onClick={onMainPageClick}>
      <News />
      <Outlet />
    </div>
  );
};

export default MainLayout;
