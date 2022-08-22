import { ReactNode } from 'react';
import { DefaultBreakpoints } from 'styled-media-query';

export type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  children: ReactNode;
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};
