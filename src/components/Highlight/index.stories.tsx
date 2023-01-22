import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Highlight } from '.';

import { highlight } from 'constants/components/Highlight';

import { HighlightProps } from './types';

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: { highlight }
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
