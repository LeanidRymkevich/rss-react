import { ReactNode, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Pages } from 'src/components/Router/Router';

import 'src/components/layouts/RouterLayout/routerLayout.scss';

const TITLE = 'New Searcher';

const RouterLayout = (): ReactNode => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect((): void => {
    if (location.pathname === '/') {
      navigate(`/${Pages.MAIN}/1`);
    }
  });

  return (
    <div className="root_wrapper">
      <header className="header">
        <nav className="navigation">
          <h1 className="title">{TITLE}</h1>
          <NavLink to="/">Main</NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default RouterLayout;
