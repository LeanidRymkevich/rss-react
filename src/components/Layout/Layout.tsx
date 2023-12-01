import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styles from './Layout.module.css';

import { Pages, Paths } from '@src/Router/types';

const TITLE = 'React Forms Task';

const RouterLayout: FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.navigation}>
            <h1 className={styles.title}>{TITLE}</h1>
            <NavLink to={Paths[Pages.MAIN]}>{Pages.MAIN}</NavLink>
            <NavLink to={Paths[Pages.UNCONTROLLED_FORM]}>
              {Pages.UNCONTROLLED_FORM}
            </NavLink>
            <NavLink to={Paths[Pages.REACT_HOOK_FORM]}>
              {Pages.REACT_HOOK_FORM}
            </NavLink>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RouterLayout;
