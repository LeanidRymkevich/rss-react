import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from 'src/components/UI/Loader/Loader';

export const TEST_ID = 'loader-wrapper';

describe('Loader component', (): void => {
  test(`it's wrapper has class`, () => {
    render(<Loader />);

    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
