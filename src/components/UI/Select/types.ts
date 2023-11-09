export interface OptionParams {
  name: string;
  value: string;
}

export interface SelectParams {
  defaultOption: string;
  options: OptionParams[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
