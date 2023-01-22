import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ShowCase } from '.';

import { GameCards, highlight } from 'constants/components';

export default {
  title: 'Components/ShowCase',
  component: ShowCase,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

const Template: Story = args => (
  <div style={{ margin: '0 auto' }}>
    <ShowCase {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Most Popular',
  highlight: highlight,
  games: GameCards
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  highlight: highlight,
  games: GameCards
};

export const WithoutGames = Template.bind({});
WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlight
};

export const WithoutHighlight = Template.bind({});
WithoutHighlight.args = {
  title: 'Most Popular',
  games: GameCards
};
