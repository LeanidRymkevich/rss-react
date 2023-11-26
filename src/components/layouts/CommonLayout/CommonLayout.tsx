import Link from 'next/link';
import Head from 'next/head';
import { FC } from 'react';

import styles from '@src/components/layouts/CommonLayout/CommonLayout.module.scss';

import { DEFAULT_TITLE_TAG_TEXT } from '@src/pages/types';
import { CommonLayoutProps } from '@src/components/layouts/CommonLayout/types';

import { capitalizeFirstLetter } from '@src/utils/StringTransformations';
import { getPath } from '@src/utils/PathUtils';

const TITLE = 'New Searcher';

const RouterLayout: FC<CommonLayoutProps> = ({
  pageName,
  children,
}: CommonLayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {`${DEFAULT_TITLE_TAG_TEXT} / ${capitalizeFirstLetter(pageName)}`}
        </title>
      </Head>
      <div className={styles.root_wrapper}>
        <header className={styles.header}>
          <nav className={styles.navigation}>
            <h1 className={styles.title}>{TITLE}</h1>
            <Link href={getPath()}>Main</Link>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default RouterLayout;
