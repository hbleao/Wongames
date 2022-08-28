import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Banner } from '.';
import { BannerProps } from './types';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>Crashland</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story<BannerProps> = args => <Banner {...args} />;

export const Default = Template.bind({});
