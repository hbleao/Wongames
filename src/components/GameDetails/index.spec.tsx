import React from 'react';
import { screen } from '@testing-library/react';

import { GameDetails } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { mockGameDetails } from './mock';

import { Rating } from './types';

type MakeSutProps = {
  rating?: Rating;
  publisher?: string;
};

const makeSut = ({ rating = 'BR0', publisher = 'TWK' }: MakeSutProps) => {
  const sut = renderWithTheme(
    <GameDetails
      rating={rating}
      publisher={publisher}
      developer={mockGameDetails.developer}
      platforms={mockGameDetails.platforms}
      releaseDate={mockGameDetails.releaseDate}
      genres={mockGameDetails.genres}
    />
  );

  return {
    sut
  };
};

describe('Components/GameDetails', () => {
  it('should be render the blocks', () => {
    const { sut } = makeSut({});

    const developer = screen.getByRole('heading', { name: /developer/i });
    const releaseDate = screen.getByRole('heading', { name: /release date/i });
    const platforms = screen.getByRole('heading', { name: /platforms/i });
    const publisher = screen.getByRole('heading', { name: /publisher/i });
    const rating = screen.getByRole('heading', { name: /rating/i });
    const genres = screen.getByRole('heading', { name: /genres/i });

    expect(developer).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
    expect(platforms).toBeInTheDocument();
    expect(publisher).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(genres).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should render platform icons', () => {
    makeSut({});

    const macImg = screen.getByRole('img', { name: /mac/i });
    const linuxImg = screen.getByRole('img', { name: /linux/i });
    const windowsImg = screen.getByRole('img', { name: /windows/i });

    expect(macImg).toBeInTheDocument();
    expect(linuxImg).toBeInTheDocument();
    expect(windowsImg).toBeInTheDocument();
  });

  it('should render the formatted date', () => {
    makeSut({});

    const date = screen.getByText(/Dec 21, 2020/i);

    expect(date).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    makeSut({});

    const freeRating = screen.getByText(/free/i);

    expect(freeRating).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    makeSut({ rating: 'BR18' });

    const freeRating = screen.getByText(/18\+/i);

    expect(freeRating).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    makeSut({});

    const genres = screen.getByText(/Role-playing \/ Action/i);

    expect(genres).toBeInTheDocument();
  });
});
