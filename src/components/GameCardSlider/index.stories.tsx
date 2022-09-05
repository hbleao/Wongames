import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GameCardSlider } from '.';
import { GameCardSliderProps } from './types';

const items = [
  {
    title: 'Population 1',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    favorite: false
  },
  {
    title: 'Population 2',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    favorite: false
  },
  {
    title: 'Population 3',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    favorite: false
  },
  {
    title: 'Population 4',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    favorite: false
  },
  {
    title: 'Population 5',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    favorite: false
  }
];

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items,
    color: 'black'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

const Template: Story<GameCardSliderProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
);

export const Default = Template.bind({});
