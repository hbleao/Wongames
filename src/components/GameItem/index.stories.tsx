import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GameItem } from '.';
import { mockGameItem } from './mock';

import { GameItemProps } from './types';

export default {
  title: 'components/GameItem',
  component: GameItem
} as Meta;

const Template: Story<GameItemProps> = args => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: mockGameItem.title,
  image: mockGameItem.image,
  price: mockGameItem.price
};

export const WithDownloadLink = Template.bind({});
WithDownloadLink.args = {
  title: mockGameItem.title,
  image: mockGameItem.image,
  price: mockGameItem.price,
  downloadLink: 'https://wongames.com/games/download'
};

export const WithPayments = Template.bind({});
WithPayments.args = {
  title: mockGameItem.title,
  image: mockGameItem.image,
  price: mockGameItem.price,
  downloadLink: '',
  paymentInfo: mockGameItem.paymentInfo
};
