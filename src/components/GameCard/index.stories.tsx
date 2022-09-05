import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GameCard } from '.';
import { GameCardProps } from './types';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    favorite: false
  },
  argTypes: {
    onFav: {
      action: {
        action: 'clicked'
      }
    },
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

const Template: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithRibbon = Template.bind({});
WithRibbon.args = {
  ribbon: '20%',
  ribbonColor: 'primary',
  ribbonSize: 'normal'
};
