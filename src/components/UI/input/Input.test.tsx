import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import queries from '@testing-library/dom/types/queries';
import Input from 'src/components/UI/Input/Input';
import { InputProps } from 'src/components/UI/Input/types';
import { ReactNode, useState } from 'react';

const PLACEHOLDER = 'Write your text here';
const FAKE_VALUE = 'FAKE_VALUE';

const props: Omit<InputProps, 'value' | 'onChange'> = {
  className: 'input',
  type: 'text',
  placeholder: PLACEHOLDER,
};

const TestLayout = (): ReactNode => {
  const [text, setText] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  return (
    <>
      <Input {...{ ...props, value: text, onChange }} />
      <h1>{text}</h1>
    </>
  );
};

describe('Input component', (): void => {
  beforeEach(
    (): RenderResult<typeof queries, HTMLElement, HTMLElement> =>
      render(<TestLayout />)
  );

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
