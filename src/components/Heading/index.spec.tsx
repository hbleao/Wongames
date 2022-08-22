import React from 'react';
import { screen } from '@testing-library/react';

import { Heading } from '.';
import { HeadingProps } from './types';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

type MakeSutProps = HeadingProps;

const makeSut = ({ children, color, lineBottom, lineLeft }: MakeSutProps) => {
  const sut = renderWithTheme(
    <Heading color={color} lineBottom={lineBottom} lineLeft={lineLeft}>
      {children}
    </Heading>
  );

  return {
    sut
  };
};

describe('Heading', () => {
  it('should be render a white label', () => {
    const text = 'Most populars';
    makeSut({ children: text });

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render a black heading when color is passed', () => {
    const text = 'Most populars';
    makeSut({ children: text, color: 'black' });

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render a heading with a line to the left side', () => {
    const text = 'Most populars';
    makeSut({ children: text, lineLeft: true });

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    });
  });

  it('should render a heading with a line at the bottom', () => {
    const text = 'Most populars';
    makeSut({ children: text, lineBottom: true });

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    });
  });
});
