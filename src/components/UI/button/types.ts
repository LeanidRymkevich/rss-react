export interface ButtonProps {
  class?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  onClickHandler: BtnClickHandler;
}

export type BtnClickHandler = (
  event: React.MouseEvent<HTMLButtonElement>
) => void;
