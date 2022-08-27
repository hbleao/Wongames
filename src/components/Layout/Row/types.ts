import { ReactNode } from 'react';

export type WrapperProps = {
  startDefault?: string;
  endDefault?: string;
  startMedium?: string;
  endMedium?: string;
  startSmall?: string;
  endSmall?: string;
};

export type RowProps = WrapperProps & {
  children: ReactNode;
};
