import SlickSlider from 'react-slick';

import * as S from './styles';
import { SliderProps } from './types';

export const Slider = ({ children, settings }: SliderProps) => {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  );
};
