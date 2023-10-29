export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
