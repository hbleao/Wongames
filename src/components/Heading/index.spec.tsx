import React from 'react';
import { screen } from '@testing-library/react';

import { Heading } from '.';
import { HeadingProps } from './types';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

type MakeSutProps = HeadingProps;

const makeSut = ({
  children,
  color,
  lineBottom,
  lineLeft,
  size,
  lineColor
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Heading
      color={color}
      lineBottom={lineBottom}
      lineLeft={lineLeft}
      size={size}
      lineColor={lineColor}
    >
      {children}
    </Heading>
  );

  return {
    sut
  };
};

describe('Components/Heading', () => {
  it('should be render a white label', () => {
    const text = 'Most populars';
    const { sut } = makeSut({ children: text });

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: '#FAFAFA'
    });
    expect(sut.container).toMatchSnapshot();
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
    makeSut({ children: text, lineLeft: true, lineColor: 'secondary' });

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

  it('should render a heading with small size', () => {
    const text = 'Most populars';
    makeSut({ children: text, lineBottom: true, size: 'small' });

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toHaveStyle({
      'font-size': '1.6rem'
    });
    expect(heading).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    });
  });

  it('should render a heading with huge size', () => {
    const text = 'Most populars';
    makeSut({ children: text, lineBottom: true, size: 'huge' });

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toHaveStyle({
      'font-size': '5.2rem'
    });
  });

  it('should render a Heading with a secondary line color', () => {
    const text = 'Most populars';
    makeSut({
      children: text,
      lineBottom: true,
      lineLeft: true,
      lineColor: 'secondary'
    });

    const heading = screen.getByRole('heading', { name: text });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    });
  });
});
