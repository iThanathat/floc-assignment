import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type TextFieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  icon?: React.ReactNode;
  invalid?: boolean;
};
