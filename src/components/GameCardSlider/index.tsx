import * as S from './styles';

import { GameCard } from 'components/GameCard';
import { Slider } from 'components/Slider';

import { SliderSettings } from 'components/Slider/types';
import { GameCardSliderProps } from './types';
import {
  ArrowBackIos as ArrowRight,
  ArrowForwardIos as ArrowLeft
} from '@styled-icons/material-outlined';

export const GameCardSlider = ({
  items,
  color = 'black'
}: GameCardSliderProps) => {
  const settings: SliderSettings = {
    slidesToShow: 4,
    infinite: false,
    lazyLoad: 'ondemand',
    nextArrow: <ArrowLeft aria-label="next games" size={20} />,
    prevArrow: <ArrowRight aria-label="previous games" size={20} />,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          arrows: false,
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1.1
        }
      }
    ]
  };

  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map(item => (
          <GameCard key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
};
