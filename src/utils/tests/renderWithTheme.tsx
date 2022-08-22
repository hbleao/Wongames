import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

export const renderWithTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
