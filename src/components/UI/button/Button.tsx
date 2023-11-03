import { ReactNode } from 'react';
import { ButtonProps } from 'src/components/UI/Button/types';

const Button = ({ text, ...props }: ButtonProps): ReactNode => {
  return <button {...props}>{text}</button>;
};

export default Button;
