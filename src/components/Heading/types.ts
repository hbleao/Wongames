import { ReactNode } from 'react';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium';
  lineColor?: LineColors;
};
