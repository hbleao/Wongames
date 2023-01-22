import { useRef, useState } from 'react';
import {
  ArrowBackIos as ArrowRight,
  ArrowForwardIos as ArrowLeft,
  Close
} from '@styled-icons/material-outlined';
import SlickSlider from 'react-slick';

import * as S from './styles';

import { Slider } from 'components/Slider';

import { SliderSettings } from 'components/Slider/types';
import { GalleryProps } from './types';

export const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sliderRef = useRef<SlickSlider>(null);

  const commonSettings: SliderSettings = {
    lazyLoad: 'ondemand',
    infinite: false,
    nextArrow: <ArrowLeft aria-label="next image" size={20} />,
    prevArrow: <ArrowRight aria-label="previous image" size={20} />
  };

  const settings: SliderSettings = {
    ...commonSettings,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          arrows: true,
          slidesToShow: 3.2,
          draggable: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2.2,
          draggable: true
        }
      }
    ]
  };

  const modalSettings = {
    ...commonSettings,
    slidesToShow: 1
  };

  function handleOpenModal(index: number) {
    setIsOpen(true);
    sliderRef.current?.slickGoTo(index, true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <S.Wrapper>
      <Slider ref={sliderRef} settings={settings}>
        {items.map((item, index) => (
          <img
            key={`thumb-${item.label}`}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.alt}`}
            onClick={() => handleOpenModal(index)}
          />
        ))}
      </Slider>
      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close-modal"
          onClick={handleCloseModal}
        >
          <Close size={40} />
        </S.Close>
        <S.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items.map(item => (
              <img
                key={`gallery-${item.label}`}
                role="img"
                src={item.src}
                alt={item.alt}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
};
