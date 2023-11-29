import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Loader from '@src/components/UI/Loader/Loader';

import styles from '@src/components/UI/Loader/Loader.module.scss';

import { LOADER_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';

describe('Loader component', (): void => {
  test(`it's present in the document`, () => {
    render(<Loader />);
    expect(screen.getByTestId(LOADER_TEST_ID)).toBeInTheDocument();
  });

  test(`it has certain class`, () => {
    render(<Loader />);
    expect(screen.getByTestId(LOADER_TEST_ID)).toHaveClass(
      styles.loader_wrapper
    );
  });
});
