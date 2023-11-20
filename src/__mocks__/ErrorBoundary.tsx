import { ReactNode, useState } from 'react';
import Button from 'src/components/UI/Button/Button';

export const TestComponentForErrorBoundary = (): ReactNode => {
  const [hasError, setHasError] = useState(false);

  if (hasError) throw new Error();

  return (
    <div>
      <Button onClick={(): void => setHasError(true)}>Error</Button>
    </div>
  );
};
