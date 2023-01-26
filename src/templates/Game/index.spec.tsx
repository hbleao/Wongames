import React from 'react';
import { screen } from '@testing-library/react';

import { TemplateGame } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { mockGallery } from 'components/Gallery/mock';
import { mockGameDetails } from 'components/GameDetails/mock';
import { mockGameCard } from 'components/GameCard/mock';
import { mockHighLight } from 'components/Highlight/mock';
import { mockGameInfo } from 'components/GameInfo/mock';
import { mockTextContent } from 'components/TextContent/mock';

type MakeSutProps = {
  gallery?: any;
};

const makeSut = ({ gallery = mockGallery }: MakeSutProps) => {
  const sut = renderWithTheme(
    <TemplateGame
      cover="bg-image.jpg"
      gameInfo={mockGameInfo}
      gallery={gallery}
      description={mockTextContent.content}
      details={mockGameDetails}
      upComingGames={mockGameCard}
      recommendedGames={mockGameCard}
      upComingHighLight={mockHighLight}
    />
  );

  return {
    sut
  };
};

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    Gallery: () => {
      return <div data-testid="Mock Gallery">Mock Gallery</div>;
    }
  };
});

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    GameInfo: () => {
      return <div data-testid="Mock GameInfo">Mock GameInfo</div>;
    }
  };
});

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    GameDetails: () => {
      return <div data-testid="Mock GameDetails">Mock GameDetails</div>;
    }
  };
});

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: () => {
      return <div data-testid="Mock ShowCase">Mock ShowCase</div>;
    }
  };
});

jest.mock('components/TextContent', () => {
  return {
    __esModule: true,
    TextContent: () => {
      return <div data-testid="Mock TextContent">Mock TextContent</div>;
    }
  };
});

describe('Templates/Game', () => {
  it('should be render a Game', () => {
    makeSut({});

    const gallery = screen.getByTestId(/Mock Gallery/i);
    const gameInfo = screen.getByTestId(/Mock gameInfo/i);
    const gameDetails = screen.getByTestId(/Mock gameDetails/i);
    const showcase = screen.getAllByTestId(/Mock showcase/i);
    const textContent = screen.getByTestId(/Mock textContent/i);

    expect(gallery).toBeInTheDocument();
    expect(gameInfo).toBeInTheDocument();
    expect(gameDetails).toBeInTheDocument();
    expect(showcase[0]).toBeInTheDocument();
    expect(showcase[1]).toBeInTheDocument();
    expect(textContent).toBeInTheDocument();
  });

  it('should not render the Gallery component', () => {
    makeSut({ gallery: null });

    const gallery = screen.queryByTestId(/Mock Gallery/i);
    expect(gallery).not.toBeInTheDocument();
  });

  it('should not render the Gallery on mobile', () => {
    makeSut({});

    const gallery = screen.queryByTestId(/Mock Gallery/i);

    expect(gallery?.parentElement).toHaveStyle({
      display: 'none'
    });

    expect(gallery?.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    });
  });

  it('should render the cover image', () => {
    makeSut({});

    const backgroundImage = screen.queryByRole('image', { name: /cover/i });

    expect(backgroundImage).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    });

    expect(backgroundImage).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    });
  });
});
