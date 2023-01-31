import React from 'react';
import { screen } from '@testing-library/react';

import { Home } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { mockBanners } from 'components/BannerSlider/mock';
import { mockGameCards } from 'components/GameCardSlider/mock';
import { mockHighlight } from 'components/Highlight/mock';

const props = {
  banners: mockBanners,
  gameCards: mockGameCards,
  freeGameCards: mockGameCards,
  freeGames: mockHighlight,
  mostPopularGameCards: mockGameCards,
  mostPopularHighlight: mockHighlight,
  upcomingGameCards: mockGameCards,
  upcomingGames: mockHighlight
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
