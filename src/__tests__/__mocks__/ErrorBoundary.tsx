import { ReactNode, useState } from 'react';
import MyButton from '@src/components/UI/MyButton/MyButton';

export const TestComponentForErrorBoundary = (): ReactNode => {
  const [hasError, setHasError] = useState(false);

  if (hasError) throw new Error();

  return (
    <div>
      <MyButton onClick={(): void => setHasError(true)}>Error</MyButton>
    </div>
  );
};
