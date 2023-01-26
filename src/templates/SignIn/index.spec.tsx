import React from 'react';
import { screen } from '@testing-library/react';

import { TemplateSignIn } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

const makeSut = () => {
  const sut = renderWithTheme(<TemplateSignIn />);

  return {
    sut
  };
};

describe('Templates/SignIn', () => {
  it('should be able two logos', () => {
    makeSut();

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(2);
  });

  it('should be able to render banner main header', () => {
    const titleBanner =
      'Welcome the magical world of games, the best online platform in the world.';
    makeSut();

    const titleBannerElement = screen.getByText(titleBanner);

    expect(titleBannerElement).toBeInTheDocument();
  });

  it('should be able to render subtitle', () => {
    makeSut();

    const subtitleElement = screen.getByText(
      /is the best and most complete gaming platform/i
    );

    expect(subtitleElement).toBeInTheDocument();
  });

  it('should be able to render title form', () => {
    makeSut();

    const titleForm = screen.getByText(/Sign In/);

    expect(titleForm).toBeInTheDocument();
  });

  it('should be able to render two inputs in the page', () => {
    makeSut();

    const inputs = screen.getAllByRole('textbox');

    expect(inputs).toHaveLength(2);
  });

  it('should be able to render button submit', () => {
    makeSut();

    const button = screen.getByText(/Sign in now/);

    expect(button).toBeInTheDocument();
  });

  it('should be able to redirect to sign up', () => {
    makeSut();

    jest.mock('next/link', () => {
      return (props: any) => {
        return props.children;
      };
    });

    const dontHaveAccount = screen.getByText(/Sign up/);

    expect(dontHaveAccount).toHaveAttribute('href', '/sign-up');
  });
});
