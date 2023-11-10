import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from 'src/components/UI/Loader/Loader';

describe('Loader component', (): void => {
  test(`it's wrapper has class`, () => {
    render(<Loader />);

    expect(screen.getByTestId('loader-wrapper')).toBeInTheDocument();
  });
});
