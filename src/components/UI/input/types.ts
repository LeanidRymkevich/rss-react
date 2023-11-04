export interface InputProps {
  class?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
