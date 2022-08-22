import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading
} as Meta;

const Template: Story = args => <Heading {...args}>{args.children}</Heading>;

export const Default = Template.bind({});
Default.args = {
  children: 'Most populars',
  color: 'black',
  lineLeft: false,
  lineBottom: false
};
