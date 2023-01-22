import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BannerSlider } from '.';

import { Banners } from 'constants/components/BannerSlider';

import { BannerSliderProps } from './types';

export default {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  args: { items: Banners },
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
