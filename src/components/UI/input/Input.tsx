import { ReactNode } from 'react';
import { InputProps } from 'src/components/UI/Input/types';

const Input = (props: InputProps): ReactNode => {
  return <input {...props}></input>;
};

export default Input;
