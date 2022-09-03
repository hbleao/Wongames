import React from 'react';
import { screen } from '@testing-library/react';

import { BannerSlider } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

const items = [
  {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>Crashland</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>Crashland</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
];

const makeSut = () => {
  const sut = renderWithTheme(<BannerSlider items={items} />);

  return {
    sut
  };
};

describe('BannerSlider', () => {
  it('should be render a BannerSlider', () => {
    makeSut();

    const element = document.querySelector('.slick-vertical');

    expect(element).toBeInTheDocument();
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

    expect(banners).toHaveLength(2);
    expect(activeBanner).toHaveLength(1);
    expect(firstBannerTitle).toBeInTheDocument();
    expect(secondBannerTitle).toBeInTheDocument();
  });

  it('should render 2 dots', () => {
    makeSut();

    const dotItems = document.querySelectorAll('ul.slick-dots > li');

    expect(dotItems).toHaveLength(2);
  });
});
