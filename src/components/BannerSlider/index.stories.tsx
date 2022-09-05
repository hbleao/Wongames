import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BannerSlider } from '.';
import { BannerSliderProps } from './types';

const items = [
  {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>Crashland</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>Crashland</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  },
  {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>Crashland</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
];

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
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
