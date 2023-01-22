import React from 'react';
import { screen } from '@testing-library/react';

import { TemplateSignUp } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

const makeSut = () => {
  const sut = renderWithTheme(<TemplateSignUp />);

  return {
    sut
  };
};

describe('Auth', () => {
  it('should be able two logos', () => {
    makeSut();

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(2);
  });

  it('should be able to render banner main header', () => {
    const titleBanner = 'All your favorite games in one place';
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

  it('should be able to render content title', () => {
    makeSut();

    const contentTitleElement = screen.getByText(/Sign Up/);

    expect(contentTitleElement).toBeInTheDocument();
  });

  it('should be able to render four inputs in the page', () => {
    makeSut();

    const inputs = document.querySelectorAll('input');

    expect(inputs).toHaveLength(4);
  });

  it('should be able to render button submit', () => {
    makeSut();

    const button = screen.getByText(/Sign up now/);

    expect(button).toBeInTheDocument();
  });

  it('should be able to redirect to sign up', () => {
    makeSut();

    jest.mock('next/link', () => {
      return (props: any) => {
        return props.children;
      };
    });

    const IHaveAccount = screen.getByText(/Sign in/);

    expect(IHaveAccount).toHaveAttribute('href', '/sign-in');
  });
});
