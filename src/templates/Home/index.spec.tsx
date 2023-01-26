import React from 'react';
import { screen } from '@testing-library/react';

import { Home } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { Banners, GameCards, highlight } from 'constants/components';

const props = {
  banners: Banners,
  gameCards: GameCards,
  freeGameCards: GameCards,
  freeGames: highlight,
  mostPopularGameCards: GameCards,
  mostPopularHighlight: highlight,
  upcomingGameCards: GameCards,
  upcomingGames: highlight
};

const makeSut = () => {
  const sut = renderWithTheme(<Home {...props} />);

  return {
    sut
  };
};

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: () => {
      return <div data-testid="Mock BannerSlider">BannerSlider</div>;
    }
  };
});

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: () => {
      return <div data-testid="Mock ShowCase">ShowCase</div>;
    }
  };
});

describe('Templates/Home', () => {
  it('should render banner', () => {
    makeSut();

    const banner = screen.getByTestId(/mock BannerSlider/i);

    expect(banner).toBeInTheDocument();
  });

  it('should render ShowCase', () => {
    makeSut();

    const showCase = screen.getAllByTestId(/mock showcase/i);

    expect(showCase).toHaveLength(4);
  });
});
