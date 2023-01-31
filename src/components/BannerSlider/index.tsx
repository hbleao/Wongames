import * as S from './styles';

import { Banner, Slider } from 'components';

import { SliderSettings } from 'components/Slider/types';
import { BannerSliderProps } from './types';

export const BannerSlider = ({ items }: BannerSliderProps) => {
  const settings: SliderSettings = {
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  };

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map(item => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
};
