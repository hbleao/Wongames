import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GameDetails } from '.';
import { mockGameDetails } from './mock';
import { GameDetailsProps } from './types';

export default {
  title: 'Components/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGameDetails,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Action', 'Adventure']
      }
    }
  }
} as Meta;

const Template: Story<GameDetailsProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);

export const Default = Template.bind({});
