import React from 'react';
import { screen } from '@testing-library/react';

import { BannerSlider } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { Banners } from 'constants/components/BannerSlider';

const makeSut = () => {
  const sut = renderWithTheme(<BannerSlider items={Banners} />);

  return {
    sut
  };
};

describe('Components/BannerSlider', () => {
  it('should be render a BannerSlider', () => {
    const { sut } = makeSut();

    const element = document.querySelector('.slick-vertical');

    expect(element).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should render with 1 active item', () => {
    makeSut();

    const banners = document.querySelectorAll('.slick-slide');
    const activeBanner = document.querySelectorAll('li.slick-active');
    const firstBannerTitle = screen.getByRole('heading', {
      name: 'Defy death 1',
      hidden: false
    });
    const secondBannerTitle = screen.getByRole('heading', {
      name: 'Defy death 2',
      hidden: true
    });

    expect(banners).toHaveLength(3);
    expect(activeBanner).toHaveLength(1);
    expect(firstBannerTitle).toBeInTheDocument();
    expect(secondBannerTitle).toBeInTheDocument();
  });

  it('should render 3 dots', () => {
    makeSut();

    const dotItems = document.querySelectorAll('ul.slick-dots > li');

    expect(dotItems).toHaveLength(3);
  });
});
