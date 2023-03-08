export type SelectProps = {
  options: OptionsType;
  defaultValue?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export type OptionsType = {
  value: string;
  label: string;
}[];
