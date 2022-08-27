import { ReactNode } from 'react';

export type WrapperProps = {
  gapSmall?: string;
  gapDefault?: string;
  gapMedium?: string;
  marginSmall?: string;
  marginDefault?: string;
  marginMedium?: string;
  paddingDefault?: string;
  paddingSmall?: string;
  paddingMedium?: string;
  backgroundColor?: string;
};

export type MaxWithSectionProps = WrapperProps & {
  children: ReactNode;
};
