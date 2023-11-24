import { ReactNode } from 'react';
import { MyButtonProps } from '@src/components/UI/MyButton/types';

const MyButton = ({ children, ...props }: MyButtonProps): ReactNode => {
  return <button {...props}>{children}</button>;
};

export default MyButton;
