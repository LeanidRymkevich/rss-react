import { ReactNode } from 'react';

export interface MyButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: string | ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
