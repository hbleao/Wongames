import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { GameCard } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { RibbonColors, RibbonSizes } from 'components/Ribbon/types';

type MakeSut = {
  title?: string;
  developer?: string;
  image?: string;
  price?: string;
  promotionalPrice?: string;
  favorite?: boolean;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
  onFav?: () => void;
};

const makeSut = ({
  title = 'Population',
  developer = 'Rockstar Games',
  image = 'https://source.unsplash.com/user/willianjusten/300x140',
  price = 'R$ 235,00',
  promotionalPrice,
  favorite,
  ribbon,
  ribbonColor,
  ribbonSize,
  onFav = () => null
}: MakeSut) => {
  const sut = renderWithTheme(
    <GameCard
      title={title}
      developer={developer}
      image={image}
      price={price}
      promotionalPrice={promotionalPrice}
      favorite={favorite}
      ribbon={ribbon}
      ribbonColor={ribbonColor}
      ribbonSize={ribbonSize}
      onFav={onFav}
    />
  );

  return {
    sut
  };
};

describe('GameCard', () => {
  it('should be render a GameCard', () => {
    makeSut({});

    const title = screen.getByRole('heading', { name: /population/i });
    const developer = screen.getByRole('heading', { name: /rockstar games/i });
    const image = screen.getByRole('img', { name: /population/i });
    const price = screen.getByText(/235,00/i);
    const wishListButton = screen.getByLabelText(/add to wishlist/i);
    const shoppingCartButton = screen.getByLabelText(/go to shopping cart/i);

    expect(title).toBeInTheDocument();
    expect(developer).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(wishListButton).toBeInTheDocument();
    expect(shoppingCartButton).toBeInTheDocument();
  });

  it('should render price in label', () => {
    const price = 'R$ 239,00';
    makeSut({ price });

    const priceLabel = screen.getByText(price);

    expect(priceLabel).not.toHaveStyle({
      'text-decoration': 'line-through'
    });
  });

  it('should render a line-through in price when promotional', () => {
    const price = 'R$ 200,00';
    const promotionalPrice = 'R$ 115,00';

    makeSut({ promotionalPrice, price });

    const priceLabel = screen.getByText(price);
    const promotionalPriceLabel = screen.getByText(promotionalPrice);

    expect(priceLabel).toHaveStyle({
      'text-decoration': 'line-through'
    });
    expect(promotionalPriceLabel).not.toHaveStyle({
      'text-decoration': 'line-through'
    });
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    makeSut({ favorite: true });

    const promotionalPriceLabel =
      screen.getByLabelText(/Remove from wishlist/i);

    expect(promotionalPriceLabel).not.toHaveStyle({
      'text-decoration': 'line-through'
    });
  });

  it('should call oNFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    makeSut({ favorite: true, onFav });

    const [buttonFav] = screen.getAllByRole('button');

    fireEvent.click(buttonFav);

    expect(onFav).toBeCalled();
  });

  it('should render Ribbon', () => {
    makeSut({
      ribbon: 'My Ribbon',
      ribbonColor: 'secondary',
      ribbonSize: 'small'
    });

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ background: '#3cd3c1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
