import { InputHTMLAttributes } from 'react';

export type CheckboxProps = {
  labelText?: string;
  labelFor?: string;
  isChecked?: boolean;
  labelColor?: 'black' | 'white';
  value?: string | ReadonlyArray<string> | number;
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export type LabelProps = {
  labelColor?: 'black' | 'white';
};
