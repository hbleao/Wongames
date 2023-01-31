import React from 'react';
import { screen } from '@testing-library/react';

import { ShowCase } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { ShowCaseProps } from './types';
import { mockGameCards } from 'components/GameCardSlider/mock';
import { mockHighlight } from 'components/Highlight/mock';

const makeSut = ({ title, games, highlight }: ShowCaseProps) => {
  const sut = renderWithTheme(
    <ShowCase title={title} games={games} highlight={highlight} />
  );

  return {
    sut
  };
};

describe('Components/ShowCase', () => {
  it('should be render a ShowCase', () => {
    const title = 'Top Five';
    const games = mockGameCards;
    const { sut } = makeSut({ title, games, highlight: mockHighlight });

    const titlePage = screen.getByRole('heading', { name: title });
    const highlightTitle = screen.getByRole('heading', {
      name: mockHighlight.title
    });
    const gameCardTitle = screen.getByRole('heading', {
      name: mockGameCards[0].title
    });

    expect(titlePage).toBeInTheDocument();
    expect(highlightTitle).toBeInTheDocument();
    expect(gameCardTitle).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should be render a ShowCase without title', () => {
    makeSut({});

    const titlePage = screen.queryByRole('heading');

    expect(titlePage).not.toBeInTheDocument();
  });

  it('should be render a ShowCase without game card title', () => {
    makeSut({});

    const gameCardTitle = screen.queryByRole('heading', {
      name: mockGameCards[0].title
    });

    expect(gameCardTitle).not.toBeInTheDocument();
  });

  it('should be render a ShowCase without highlight title', () => {
    makeSut({});

    const highlightTitle = screen.queryByRole('heading', {
      name: mockGameCards[0].title
    });

    expect(highlightTitle).not.toBeInTheDocument();
  });
});
