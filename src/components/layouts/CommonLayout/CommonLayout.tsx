import Link from 'next/link';
import Head from 'next/head';
import { FC } from 'react';

import styles from '@src/components/layouts/CommonLayout/CommonLayout.module.scss';

import { DEFAULT_TITLE_TAG_TEXT } from '@src/pages/types';
import { CommonLayoutProps } from '@src/components/layouts/CommonLayout/types';

import { capitalizeFirstLetter } from '@src/utils/StringTransformations';
import { getPath } from '@src/utils/PathUtils';

import {
  NAV_BAR_TEST_ID,
  HEADER_TEST_ID,
  MAIN_SECTION_TEST_ID,
} from '@src/__tests__/__mocks__/TEST_IDs';

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
        <header data-testid={HEADER_TEST_ID} className={styles.header}>
          <nav data-testid={NAV_BAR_TEST_ID} className={styles.navigation}>
            <h1 className={styles.title}>{TITLE}</h1>
            <Link href={getPath()}>Main</Link>
          </nav>
        </header>

        <main data-testid={MAIN_SECTION_TEST_ID} className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
};

export default RouterLayout;
