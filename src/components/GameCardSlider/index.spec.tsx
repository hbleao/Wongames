import React from 'react';

import { GameCardSlider } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { mockGameCards } from './mock';

const makeSut = () => {
  const sut = renderWithTheme(<GameCardSlider items={mockGameCards} />);

  return {
    sut
  };
};

describe('Components/GameCardSlider', () => {
  it('should be render a GameCardSlider', () => {
    const { sut } = makeSut();

    const gameCardSlide = document.querySelector('.slick-slide');

    expect(gameCardSlide).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
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
