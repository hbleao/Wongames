import React from 'react';
import { screen } from '@testing-library/react';

import { GameInfo } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

export type GameInfoProps = {
  title?: string;
  description?: string;
  price?: string;
};

const makeSut = ({
  title = 'any title',
  description = 'any description',
  price = '210,00'
}: GameInfoProps) => {
  const sut = renderWithTheme(
    <GameInfo title={title} description={description} price={price} />
  );

  return {
    sut
  };
};

describe('Components/Gameinfo', () => {
  it('should be render a game information', () => {
    const { sut } = makeSut({});

    const heading = screen.getByText('any title');
    const description = screen.getByText('any title');
    const price = screen.getByText('any title');

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should be render buttons', () => {
    makeSut({});

    const buttonAddToCart = screen.getByText(/add to cart/i);
    const buttonWishList = screen.getByText(/wishlist/i);

    expect(buttonAddToCart).toBeInTheDocument();
    expect(buttonWishList).toBeInTheDocument();
  });
});
