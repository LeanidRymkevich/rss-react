import { fireEvent, render, screen } from '@testing-library/react';
import {
  describe,
  expect,
  test,
  beforeEach,
  HookCleanupCallback,
  Awaitable,
} from 'vitest';
import '@testing-library/jest-dom';
import { useState } from 'react';

import { MyInputProps } from '@src/components/UI/MyInput/types';

import MyInput from '@src/components/UI/MyInput/MyInput';

const PLACEHOLDER = 'Write your text here';
const FAKE_VALUE = 'FAKE_VALUE';

const props: Omit<MyInputProps, 'value' | 'onChange'> = {
  className: 'input',
  type: 'text',
  placeholder: PLACEHOLDER,
};

const TestLayout = (): JSX.Element => {
  const [text, setText] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  return (
    <>
      <MyInput {...{ ...props, value: text, onChange }} />
      <h1>{text}</h1>
    </>
  );
};

describe('Input component', (): void => {
  beforeEach((): Awaitable<HookCleanupCallback> => {
    render(<TestLayout />);
  });

  test(`it's in the document`, () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test(`it's has placeholder`, () => {
    expect(screen.getByPlaceholderText(PLACEHOLDER)).toBeInTheDocument();
  });

  test('onChange handler is working', (): void => {
    const heading: HTMLElement = screen.getByRole('heading');
    const input: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: FAKE_VALUE } });
    expect(heading).toHaveTextContent(FAKE_VALUE);
  });
});
