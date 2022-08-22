import React from 'react';
import { screen } from '@testing-library/react';

import { Logo } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { LogoProps } from './types';

export type MakeSutProps = LogoProps;

const makeSut = ({ color, size, hideOnMobile }: MakeSutProps) => {
  const sut = renderWithTheme(
    <Logo color={color} size={size} hideOnMobile={hideOnMobile} />
  );

  return {
    sut
  };
};

describe('Logo', () => {
  it('should render a white label by default', () => {
    makeSut({});

    const logo = screen.getByLabelText(/Won Games/i);

    expect(logo.parentElement).toHaveStyle({
      color: '#fafafa'
    });
  });

  it('should render a black label when color is passed', () => {
    makeSut({ color: 'black' });

    const logo = screen.getByLabelText(/Won Games/i);

    expect(logo.parentElement).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render a bugger logo', () => {
    makeSut({ size: 'large' });

    const logo = screen.getByLabelText(/Won Games/i);

    expect(logo.parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem'
    });
  });

  it('should render a normal size logo when size is not passed', () => {
    makeSut({});

    const logo = screen.getByLabelText(/Won Games/i);

    expect(logo.parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem'
    });
  });

  it('should render a bigger logo without text if hideOnMobile', () => {
    makeSut({ hideOnMobile: true });

    const logo = screen.getByLabelText(/Won Games/i);

    expect(logo.parentElement).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    });
  });
});
