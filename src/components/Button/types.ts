import { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: ReactNode;
  onClick?: () => (event: MouseEvent) => void;
};
