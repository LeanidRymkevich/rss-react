import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from 'src/components/layouts/MainLayout/MainLayout.module.scss';
import News from 'src/pages/News/News';

const MainLayout = (): ReactNode => {
  return (
    <div className={styles.main_wrapper}>
      <News />
      <Outlet />
    </div>
  );
};

export default MainLayout;
