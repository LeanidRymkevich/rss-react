import { ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'src/components/layouts/RouterLayout/routerLayout.scss';

const TITLE = 'New Searcher';

const RouterLayout = (): ReactNode => {
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
