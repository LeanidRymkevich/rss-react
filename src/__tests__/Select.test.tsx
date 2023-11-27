import {
  describe,
  expect,
  test,
  beforeEach,
  HookCleanupCallback,
  Awaitable,
} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReactNode, useState } from 'react';

import { SelectParams } from '@src/components/UI/Select/types';

import Select from '@src/components/UI/Select/Select';

const TEST_ID = 'test-select';

const props: Omit<SelectParams, 'value' | 'onChange'> = {
  defaultOption: 'Choose number',
  options: [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
  ],
};

const TestLayout = (): ReactNode => {
  const [number, setNumber] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setNumber(event.target.value);
  };

  return (
    <>
      <Select {...{ ...props, value: number, onChange }} />
      <h1>{number}</h1>
    </>
  );
};

describe('Input component', (): void => {
  beforeEach((): Awaitable<HookCleanupCallback> => {
    render(<TestLayout />);
  });

  test(`it's in the document`, (): void => {
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });

  test(`it's has placeholder`, (): void => {
    expect(screen.getByTestId(TEST_ID)).toHaveLength(props.options.length + 1);
  });

  test('onChange handler is working', (): void => {
    const heading: HTMLElement = screen.getByRole('heading');
    const select: HTMLInputElement = screen.getByTestId(TEST_ID);
    fireEvent.change(select, { target: { value: props.options[1].value } });
    expect(heading).toHaveTextContent(props.options[1].value);
  });
});
