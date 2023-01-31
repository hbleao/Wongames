import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BannerSlider } from '.';

import { mockBanners } from './mock';

import { BannerSliderProps } from './types';

export default {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  args: { items: mockBanners },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

const Template: Story<BannerSliderProps> = args => (
  <div style={{ maxWidth: '110rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);

export const Default = Template.bind({});
