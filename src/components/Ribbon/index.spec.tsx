import React from 'react';
import { screen } from '@testing-library/react';

import { Ribbon } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { RibbonProps } from './types';

type MakeSutProps = RibbonProps;

const makeSut = ({ children, color, size }: MakeSutProps) => {
  const sut = renderWithTheme(
    <Ribbon color={color} size={size}>
      {children}
    </Ribbon>
  );

  return {
    sut
  };
};

describe('Components/Ribbon', () => {
  it('should be render a Ribbon', () => {
    const { sut } = makeSut({ children: 'Best Seller' });

    const text = screen.getByText(/best seller/i);

    expect(text).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should be render a Ribbon with primary color', () => {
    makeSut({ children: 'Best Seller' });

    const text = screen.getByText(/best seller/i);

    expect(text).toHaveStyle({
      'background-color': '#F231A5'
    });
  });

  it('should be render a Ribbon with secondary color', () => {
    makeSut({ children: 'Best Seller', color: 'secondary' });

    const text = screen.getByText(/best seller/i);

    expect(text).toHaveStyle({
      'background-color': '#3CD3C1'
    });
  });

  it('should render with with the normal size as default', () => {
    makeSut({ children: 'Best Seller' });

    const text = screen.getByText(/best seller/i);

    expect(text).toHaveStyle({
      height: '3.6rem',
      'font-size': '1.4rem'
    });
  });

  it('should render with with the small size', () => {
    makeSut({ children: 'Best Seller', size: 'small' });

    const text = screen.getByText(/best seller/i);

    expect(text).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem'
    });
  });
});
