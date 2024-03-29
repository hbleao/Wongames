import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from 'react';

type Size = 'small' | 'medium' | 'large';
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: Size;
  fullWidth?: boolean;
  icon?: ReactNode;
  as?: React.ElementType;
  minimal?: boolean;
  disabled?: boolean;
} & ButtonTypes;

export type WrapperProps = {
  fullWidth?: boolean;
  size?: Size;
  hasIcon: boolean;
  minimal?: boolean;
};
