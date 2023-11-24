import { ReactNode, useState } from 'react';

const Main = (): ReactNode => {
  const [hasError, setHasError] = useState(false);

  if (hasError) throw new Error();

  return (
    <>
      <button onClick={() => setHasError(true)}>Click!</button>
    </>
  );
};

export default Main;
