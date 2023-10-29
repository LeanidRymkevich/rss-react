export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
