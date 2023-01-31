import React from 'react';
import { screen } from '@testing-library/react';

import { TemplateWishlist } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { mockHighlight } from 'components/Highlight/mock';
import { mockGameCards } from 'components/GameCardSlider/mock';
import { GameCardProps } from 'components/GameCard/types';

type MakeSutProps = {
  games?: GameCardProps[];
};

const makeSut = ({ games = mockGameCards }: MakeSutProps) => {
  const sut = renderWithTheme(
    <TemplateWishlist
      recommendedGames={mockGameCards}
      recommendedHighLight={mockHighlight}
      games={games}
    />
  );

  return {
    sut
  };
};

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: () => {
      return <div data-testid="Mock ShowCase">BannerSlider</div>;
    }
  };
});

describe('Templates/Wishlist', () => {
  it('should be render the page title', () => {
    makeSut({});

    const titlePage = screen.getByRole('heading', { name: /wishlist/i });
    expect(titlePage).toBeInTheDocument();
  });

  it('should be render the games list', () => {
    makeSut({});

    const games = screen.getAllByText(/population/i);
    expect(games).toHaveLength(5);
  });

  it('should render empty when there are no games', () => {
    makeSut({ games: [] });

    const games = screen.queryAllByText(/population/i);
    expect(games).not.toHaveLength(5);

    const emptyElement = screen.getByRole('heading', {
      name: /your wishlist is empty/i
    });

    expect(emptyElement).toBeInTheDocument();
  });
});
