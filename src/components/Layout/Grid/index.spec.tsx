import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { Grid } from './styles';

type MakeSutProps = {
  gapDefault?: string;
  gapMedium?: string;
  gapSmall?: string;
  marginDefault?: string;
  marginMedium?: string;
  marginSmall?: string;
  paddingDefault?: string;
  paddingMedium?: string;
  paddingSmall?: string;
};

const makeSut = ({
  gapDefault,
  gapMedium,
  gapSmall,
  marginDefault,
  marginMedium,
  marginSmall,
  paddingDefault,
  paddingMedium,
  paddingSmall
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Grid
      gapDefault={gapDefault}
      gapMedium={gapMedium}
      gapSmall={gapSmall}
      marginDefault={marginDefault}
      marginMedium={marginMedium}
      marginSmall={marginSmall}
      paddingDefault={paddingDefault}
      paddingMedium={paddingMedium}
      paddingSmall={paddingSmall}
    >
      <p>Content</p>
    </Grid>
  );

  return {
    sut
  };
};

describe('Grid', () => {
  it('should be render a Grid with default style', () => {
    makeSut({});

    const content = screen.getByText(/content/i);

    expect(content.parentElement).toBeInTheDocument();
    expect(content.parentElement).toHaveStyle({
      display: 'grid',
      'grid-template-columns': '1fr repeat(12,minmax(auto,4.3rem)) 1fr',
      gap: '2rem 2rem',
      margin: '0',
      padding: '0'
    });
  });

  it('should be render a Grid on tablet version', () => {
    makeSut({});

    const content = screen.getByText(/content/i);

    expect(content.parentElement).toHaveStyleRule(
      'grid-template-columns',
      '2rem repeat(6,1fr) 2rem',
      {
        media: '(max-width: 1170px)'
      }
    );
    expect(content.parentElement).toHaveStyleRule('gap', '1rem 1rem', {
      media: '(max-width: 1170px)'
    });
  });

  it('should be render a Grid on mobile version', () => {
    makeSut({});

    const content = screen.getByText(/content/i);

    expect(content.parentElement).toHaveStyleRule(
      'grid-template-columns',
      '1rem repeat(6,1fr) 1rem',
      {
        media: '(max-width: 768px)'
      }
    );
  });

  it('should be render a Grid with custom gap', () => {
    makeSut({
      gapSmall: '1.7rem',
      gapDefault: '2.2rem',
      gapMedium: '5.5rem'
    });

    const content = screen.getByText(/content/i);

    expect(content.parentElement).toHaveStyle({
      gap: '2.2rem'
    });

    expect(content.parentElement).toHaveStyleRule('gap', '5.5rem', {
      media: '(max-width: 1170px)'
    });

    expect(content.parentElement).toHaveStyleRule('gap', '1.7rem', {
      media: '(max-width: 768px)'
    });
  });

  it('should be render a Grid with custom padding', () => {
    makeSut({
      paddingSmall: '1.7rem',
      paddingDefault: '2.2rem',
      paddingMedium: '5.5rem'
    });

    const content = screen.getByText(/content/i);

    expect(content.parentElement).toHaveStyle({
      padding: '2.2rem'
    });

    expect(content.parentElement).toHaveStyleRule('padding', '5.5rem', {
      media: '(max-width: 1170px)'
    });

    expect(content.parentElement).toHaveStyleRule('padding', '1.7rem', {
      media: '(max-width: 768px)'
    });
  });

  it('should be render a Grid with custom margin', () => {
    makeSut({
      marginSmall: '1.7rem',
      marginDefault: '2.2rem',
      marginMedium: '5.5rem'
    });

    const content = screen.getByText(/content/i);

    expect(content.parentElement).toHaveStyle({
      margin: '2.2rem'
    });

    expect(content.parentElement).toHaveStyleRule('margin', '5.5rem', {
      media: '(max-width: 1170px)'
    });

    expect(content.parentElement).toHaveStyleRule('margin', '1.7rem', {
      media: '(max-width: 768px)'
    });
  });
});
