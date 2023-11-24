export interface MyInputProps {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
