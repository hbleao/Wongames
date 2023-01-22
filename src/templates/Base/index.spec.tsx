import React from 'react';
import { screen } from '@testing-library/react';

import { Base } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    Menu: () => {
      return <div data-testid="Mock Menu">Menu</div>;
    }
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    Footer: () => {
      return <div data-testid="Mock Footer">Footer</div>;
    }
  };
});

const makeSut = () => {
  const sut = renderWithTheme(
    <Base>
      <h1 data-testid="mock heading">Heading</h1>
    </Base>
  );

  return {
    sut
  };
};

describe('Base', () => {
  it('should render menu, footer and children', () => {
    makeSut();

    const menu = screen.getByTestId(/mock menu/i);
    const footer = screen.getByTestId(/mock footer/i);
    const heading = screen.getByTestId(/mock footer/i);

    expect(menu).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  // it('should render footer', () => {
  //   makeSut();

  //   const footer = screen.getByTestId(/mock footer/i);

  //   expect(footer).toBeInTheDocument();
  // });
});
