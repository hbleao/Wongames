import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GameCardSlider } from '.';

import { GameCards } from 'constants/components/GameCardSliders';

import { GameCardSliderProps } from './types';

export default {
  title: 'Components/GameCardSlider',
  component: GameCardSlider,
  args: {
    items: GameCards,
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
