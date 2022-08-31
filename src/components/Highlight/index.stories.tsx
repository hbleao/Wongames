import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Highlight } from '.';
import { HighlightProps } from './types';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back!',
    subtitle: "Come see Jhon's new adventures",
    buttonLabel: 'Buy Now',
    backgroundImage: '/img/red-dead.png',
    buttonLink: '/rdr2'
  }
} as Meta;

const Template: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithFloatImage = Template.bind({});
WithFloatImage.args = {
  floatImage: '/img/red-dead-image.png'
};
