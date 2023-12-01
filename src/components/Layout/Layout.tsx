import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '@src/components/Layout/Layout.css';
import { Pages, Paths } from '@src/Router/types';

const TITLE = 'React Forms Task';

const RouterLayout: FC = (): JSX.Element => {
  return (
    <div className="root_wrapper">
      <header className="header">
        <nav className="navigation">
          <h1 className="title">{TITLE}</h1>
          <NavLink to={Paths[Pages.MAIN]}>{Pages.MAIN}</NavLink>
          <NavLink to={Paths[Pages.UNCONTROLLED_FORM]}>
            {Pages.UNCONTROLLED_FORM}
          </NavLink>
          <NavLink to={Paths[Pages.REACT_HOOK_FORM]}>
            {Pages.REACT_HOOK_FORM}
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default RouterLayout;
