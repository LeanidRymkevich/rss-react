import CommonLayout from '@src/components/layouts/CommonLayout/CommonLayout';
import { INDEXES, Pages } from '@src/pages/types';
import { NextRouter, useRouter } from 'next/router';

const Details = (): JSX.Element => {
  const router: NextRouter = useRouter();

  return (
    <CommonLayout pageName={Pages.DETAILS}>
      <div>
        <h1>On the details page #{router.query[INDEXES.DETAILS]}</h1>
      </div>
    </CommonLayout>
  );
};

export default Details;
