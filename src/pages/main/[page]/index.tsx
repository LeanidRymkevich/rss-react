import CommonLayout from '@src/components/layouts/CommonLayout/CommonLayout';
import { INDEXES, Pages } from '@src/pages/types';
import { NextRouter, useRouter } from 'next/router';

const Main = (): JSX.Element => {
  const router: NextRouter = useRouter();

  return (
    <CommonLayout pageName={Pages.MAIN}>
      <div>
        <h1>On the main page #{router.query[INDEXES.MAIN]}</h1>
      </div>
    </CommonLayout>
  );
};

export default Main;
