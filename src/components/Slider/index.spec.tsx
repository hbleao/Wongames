import React from 'react';
import { screen, render } from '@testing-library/react';
import 'match-media-mock.js';

import { Slider } from '.';

const makeSut = () => {
  const sut = render(
    <Slider settings={{ slidesToShow: 1, infinite: false }}>
      <p>item 1</p>
      <p>item 2</p>
    </Slider>
  );

  return {
    sut
  };
};

describe('Slider', () => {
  it('should be render children as slider item', () => {
    const { sut } = makeSut();

    const itemOne = screen.getByText('item 1');
    const itemTwo = screen.getByText('item 2');

    expect(itemOne).toBeInTheDocument();
    expect(itemOne.parentElement?.parentElement).toHaveClass('slick-slide');
    expect(itemTwo).toBeInTheDocument();
    expect(itemTwo.parentElement?.parentElement).toHaveClass('slick-slide');
    expect(sut.container.firstChild).toMatchSnapshot();
  });
});
