import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Settings } from 'react-slick';

import { Slider } from '.';
import styled from 'styled-components';

export default {
  title: 'Components/Slider',
  component: Slider
} as Meta;

const HorizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  color: white;
  text-align: center;
`;

export const Horizontal: Story = args => (
  <Slider settings={HorizontalSettings} {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
};

export const Vertical: Story = args => (
  <Slider settings={verticalSettings} {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
);
