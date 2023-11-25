import { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';

import styles from '@src/components/layouts/MainLayout/MainLayout.module.scss';

import { INDEXES, Pages } from '@src/pages/types';
import { MainLayoutProps } from './types';
import News from '@src/components/News/News';

const MainLayout: FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps): JSX.Element => {
  const router: NextRouter = useRouter();

  const onMainPageClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const id: string | undefined = router.query[INDEXES.DETAILS] as
      | string
      | undefined;
    if (!id) return;
    if (event.target instanceof HTMLAnchorElement) {
      const href: string = event.target.href;
      if (href !== `/${Pages.DETAILS}/${id}`) return;
    }

    const page: string = router.query[INDEXES.MAIN] as string;
    router.push(`/${Pages.MAIN}/${page}`);
  };

  return (
    <div className={styles.main_wrapper} onClick={onMainPageClick}>
      <News />
      {children}
    </div>
  );
};

export default MainLayout;
