import React from 'react';

import { GameCardSlider } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

const items = [
  {
    title: 'Population 1',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    onFav: () => null
  },
  {
    title: 'Population 2',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    onFav: () => null
  },
  {
    title: 'Population 3',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    onFav: () => null
  }
];

const makeSut = () => {
  const sut = renderWithTheme(<GameCardSlider items={items} />);

  return {
    sut
  };
};

describe('GameCardSlider', () => {
  it('should be render a GameCardSlider', () => {
    makeSut();

    const gameCardSlide = document.querySelector('.slick-slide');

    expect(gameCardSlide).toBeInTheDocument();
  });

  it('should render with 3 active item', () => {
    makeSut();

    const [slide1, slide2, slide3] = document.querySelectorAll('.slick-active');

    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
    expect(slide3).toBeInTheDocument();
  });

  it('should render with arrow right visible', () => {
    makeSut();

    const [slide1, slide2, slide3] = document.querySelectorAll('.slick-active');

    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
    expect(slide3).toBeInTheDocument();
  });
});
