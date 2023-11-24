import { NextRouter, useRouter } from 'next/router';

const Main = (): JSX.Element => {
  const router: NextRouter = useRouter();

  return (
    <div>
      <h1>On the main page #{router.query.page}</h1>
    </div>
  );
};

export default Main;
