/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import SlickSlider from 'react-slick';

import * as S from './styles';
import { SliderProps } from './types';

export const Slider = forwardRef<SlickSlider, SliderProps>(
  ({ children, settings }: SliderProps, ref) => {
    return (
      <S.Wrapper>
        <SlickSlider ref={ref} {...settings}>
          {children}
        </SlickSlider>
      </S.Wrapper>
    );
  }
);
