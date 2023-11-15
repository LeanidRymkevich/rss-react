import { ReactNode } from 'react';
import { ButtonProps } from 'src/components/UI/Button/types';

const Button = ({ children, ...props }: ButtonProps): ReactNode => {
  return <button {...props}>{children}</button>;
};

export default Button;
