import { ReactNode } from 'react';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: string | ReactNode;
  onClick: BtnClickHandler;
}

export type BtnClickHandler = (
  event: React.MouseEvent<HTMLButtonElement>
) => void;
