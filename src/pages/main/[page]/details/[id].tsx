import { NextRouter, useRouter } from 'next/router';

const Details = (): JSX.Element => {
  const router: NextRouter = useRouter();

  return (
    <div>
      <h1>On the details page #{router.query.id}</h1>
    </div>
  );
};

export default Details;
