import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Home } from '.';
import { HomeProps } from './type';

export default {
  title: 'Templates/Home',
  component: Home
} as Meta;

import { Banners, GameCards, highlight } from 'constants/components';

const props = {
  banners: Banners,
  gameCards: GameCards,
  freeGameCards: GameCards,
  freeGames: highlight,
  mostPopularGameCards: GameCards,
  mostPopularHighlight: highlight,
  upcomingGameCards: GameCards,
  upcomingGames: highlight
};

const Template: Story<HomeProps> = args => <Home {...args} {...props} />;

export const Default = Template.bind({});
