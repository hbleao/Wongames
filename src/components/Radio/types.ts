import { InputHTMLAttributes } from 'react';

export type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  labelText?: string;
  labelFor?: string;
  isChecked?: boolean;
  labelColor?: 'black' | 'white';
  value?: RadioValue;
  onCheck?: (status?: RadioValue) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export type LabelProps = {
  labelColor?: 'black' | 'white';
};
