import React from 'react';
import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '.';
import { ButtonProps } from './types';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

export type MakeSutProps = ButtonProps;

const makeSut = ({
  children,
  size,
  fullWidth,
  icon,
  as,
  ...props
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Button as={as} size={size} fullWidth={fullWidth} icon={icon} {...props}>
      {children}
    </Button>
  );

  return {
    sut
  };
};

describe('Button', () => {
  it('should render the medium by size', () => {
    makeSut({ children: 'buy now' });

    const button = screen.getByRole('button', { name: /buy now/i });

    expect(button).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    });

    expect(button).toMatchSnapshot();
  });

  it('should render the small size', () => {
    makeSut({ children: 'buy now', size: 'small' });

    const button = screen.getByRole('button', { name: /buy now/i });

    expect(button).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    });
  });

  it('should render the large size', () => {
    makeSut({ children: 'buy now', size: 'large' });

    const button = screen.getByRole('button', { name: /buy now/i });

    expect(button).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    });
  });

  it('should render the fullWidth version', () => {
    makeSut({ children: 'buy now', fullWidth: true });

    const button = screen.getByRole('button', { name: /buy now/i });

    expect(button).toHaveStyle({
      width: '100%'
    });
  });

  it('should render an icon version', () => {
    makeSut({ children: 'buy now', icon: <AddShoppingCart /> });

    const buttonIcon = document.querySelector('svg');

    expect(buttonIcon).toBeInTheDocument();
  });

  it('should render Button as a link', () => {
    makeSut({ children: 'buy now', as: 'a', href: '/link' });

    const link = screen.getByRole('link', { name: /buy now/i });

    expect(link).toHaveAttribute('href', '/link');
  });
});
