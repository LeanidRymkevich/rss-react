export interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  onClick: BtnClickHandler;
}

export type BtnClickHandler = (
  event: React.MouseEvent<HTMLButtonElement>
) => void;
