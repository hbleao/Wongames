import React from 'react';
import { screen, waitFor } from '@testing-library/react';

import { Logo } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { LogoProps } from './types';

export type MakeSutProps = LogoProps;

const makeSut = ({ id, color, size, hideOnMobile }: MakeSutProps) => {
  const sut = renderWithTheme(
    <Logo id={id} color={color} size={size} hideOnMobile={hideOnMobile} />
  );

  return {
    sut
  };
};

describe('Components/Logo', () => {
  it('should render a white label by default', () => {
    const { sut } = makeSut({});

    const logo = screen.getByLabelText(/Won Games/i);

    expect(logo).toHaveStyle({
      color: '#fafafa'
    });
    expect(sut.container).toMatchSnapshot();
  });

  it('should render the logo with id passed', () => {
    const id = 'my_id';
    makeSut({ id });

    const logoId = document.querySelector(`#paint_${id}`);

    expect(logoId).toBeInTheDocument();
  });

  it('should render a black label when color is passed', () => {
    makeSut({ color: 'black' });

    const logo = screen.getByLabelText(/Won Games/i);

    expect(logo).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render a bigger logo', async () => {
    makeSut({ size: 'large' });

    const logo = screen.getByLabelText(/Won Games/i);

    await waitFor(() => {
      expect(logo.parentElement).toHaveStyle({
        width: '20rem',
        height: '5.9rem'
      });
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
