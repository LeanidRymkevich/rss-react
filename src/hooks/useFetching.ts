import { useState } from 'react';

const useFetching = (callback: CallableFunction): useFetchingReturnType => {
  const [isLoading, setLoading] = useState(false);

  const fetching = async (
    ...args: (object | string | number | boolean)[]
  ): Promise<void> => {
    try {
      setLoading(true);
      await callback(...args);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('Error in useFetching function');
      }
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading];
};

type useFetchingReturnType = [
  (...args: (object | string | number | boolean)[]) => Promise<void>,
  boolean,
];

export { useFetching };
export type { useFetchingReturnType };
