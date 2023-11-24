export interface MyButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
