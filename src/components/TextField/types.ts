import { InputHTMLAttributes, ReactNode } from 'react';

export type TextFieldProps = {
  labelText?: string;
  labelFor?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  initialValue?: string;
  errorMessage?: string;
  disabled?: boolean;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export type WrapperProps = Pick<TextFieldProps, 'disabled'> & {
  isError: boolean;
};

export type IconProps = Pick<TextFieldProps, 'iconPosition'>;
